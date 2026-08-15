import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="/assets/images/lib1.jpg" alt="Library interior" />
                </div>
                <div>
                   <p className="about-text">
    Our library management system brings the traditional library experience 
    online, making it easier for students and staff to search, borrow, and 
    manage books without the usual paperwork. Whether you're looking for a 
    textbook, a research reference, or something to read for leisure, our 
    catalog is built to help you find it quickly.<br/>
    <br/>
    Members can browse the full collection, check real-time availability, 
    reserve titles in advance, and track their borrowing history — all from 
    one dashboard. Librarians get equally powerful tools on the admin side, 
    including issue and return tracking, automated fine calculation for 
    overdue books, and category-wise book management.<br/>
    <br/>
    Built as part of an ongoing effort to modernize campus library operations, 
    this system aims to reduce manual record-keeping while making the library 
    more accessible to everyone who uses it.<br/>
    <br/>
    We're always looking to improve — your feedback and suggestions are welcome!
</p>
                </div>
            </div>
        </div>
    )
}

export default About
