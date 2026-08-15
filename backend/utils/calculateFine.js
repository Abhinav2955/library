// Fine calculation utility
// Rate can be tuned or later moved to an env var / admin-configurable setting
const FINE_PER_DAY = 5; // ₹5 per day overdue
const GRACE_PERIOD_DAYS = 0; // days allowed after due date before fines start

/**
 * Calculates fine for a transaction.
 * @param {String|Date} toDate - the due date of the transaction
 * @param {String|Date} [returnDate] - actual return date; defaults to now if not returned yet
 * @returns {{ daysLate: number, fineAmount: number, isOverdue: boolean }}
 */
export function calculateFine(toDate, returnDate = null) {
    const due = new Date(toDate);
    const returned = returnDate ? new Date(returnDate) : new Date();

    due.setHours(0, 0, 0, 0);
    returned.setHours(0, 0, 0, 0);

    const msPerDay = 1000 * 60 * 60 * 24;
    const rawDaysLate = Math.floor((returned - due) / msPerDay);

    const daysLate = Math.max(0, rawDaysLate - GRACE_PERIOD_DAYS);
    const fineAmount = daysLate * FINE_PER_DAY;

    return {
        daysLate,
        fineAmount,
        isOverdue: daysLate > 0
    };
}