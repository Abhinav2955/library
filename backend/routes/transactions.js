import express from "express"
import Book from "../models/Book.js"
import BookTransaction from "../models/BookTransaction.js"
import { calculateFine } from "../utils/calculateFine.js"

const router = express.Router()

router.post("/add-transaction", async (req, res) => {
    try {
        if (req.body.isAdmin === true) {
            const newtransaction = await new BookTransaction({
                bookId: req.body.bookId,
                borrowerId: req.body.borrowerId,
                bookName: req.body.bookName,
                borrowerName: req.body.borrowerName,
                transactionType: req.body.transactionType,
                fromDate: req.body.fromDate,
                toDate: req.body.toDate
            })
            const transaction = await newtransaction.save()
            const book = Book.findById(req.body.bookId)
            await book.updateOne({ $push: { transactions: transaction._id } })
            res.status(200).json(transaction)
        }
        else if (req.body.isAdmin === false) {
            res.status(500).json("You are not allowed to add a Transaction")
        }
    }
    catch (err) {
        res.status(504).json(err)
    }
})

router.get("/all-transactions", async (req, res) => {
    try {
        const transactions = await BookTransaction.find({}).sort({ _id: -1 })
        res.status(200).json(transactions)
    }
    catch (err) {
        return res.status(504).json(err)
    }
})

router.put("/update-transaction/:id", async (req, res) => {
    try {
        if (req.body.isAdmin) {
            await BookTransaction.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Transaction details updated successfully");
        }
    }
    catch (err) {
        res.status(504).json(err)
    }
})

router.delete("/remove-transaction/:id", async (req, res) => {
    if (req.body.isAdmin) {
        try {
            const data = await BookTransaction.findByIdAndDelete(req.params.id);
            const book = Book.findById(data.bookId)
            console.log(book)
            await book.updateOne({ $pull: { transactions: req.params.id } })
            res.status(200).json("Transaction deleted successfully");
        } catch (err) {
            return res.status(504).json(err);
        }
    } else {
        return res.status(403).json("You dont have permission to delete a book!");
    }
})

router.get("/calculate-fine/:id", async (req, res) => {
    try {
        const transaction = await BookTransaction.findById(req.params.id)
        if (!transaction) {
            return res.status(404).json("Transaction not found")
        }
        const fineDetails = calculateFine(transaction.toDate, transaction.returnDate)
        res.status(200).json(fineDetails)
    }
    catch (err) {
        res.status(504).json(err)
    }
})

router.put("/return-book/:id", async (req, res) => {
    try {
        if (!req.body.isAdmin) {
            return res.status(403).json("You dont have permission to return a book!")
        }
        const transaction = await BookTransaction.findById(req.params.id)
        if (!transaction) {
            return res.status(404).json("Transaction not found")
        }

        const today = new Date().toISOString().split("T")[0]
        const { fineAmount } = calculateFine(transaction.toDate, today)

        const updated = await BookTransaction.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    returnDate: today,
                    transactionStatus: "Returned",
                    fineAmount
                }
            },
            { new: true }
        )
        res.status(200).json(updated)
    }
    catch (err) {
        res.status(504).json(err)
    }
})

router.put("/pay-fine/:id", async (req, res) => {
    try {
        if (!req.body.isAdmin) {
            return res.status(403).json("You dont have permission to update fine status!")
        }
        const updated = await BookTransaction.findByIdAndUpdate(
            req.params.id,
            { $set: { finePaid: true } },
            { new: true }
        )
        res.status(200).json(updated)
    }
    catch (err) {
        res.status(504).json(err)
    }
})

export default router