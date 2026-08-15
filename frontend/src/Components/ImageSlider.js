import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="/assets/images/lib2.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to IEM Library</h3>
        <p>Explore thousands of books, journals, and resources in one place.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                       src="/assets/images/lib3.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Easy Book Reservations</h3>
        <p>Reserve and manage your book borrowings online, hassle-free.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/assets/images/lib4.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                          <h3>Track Due Dates & Fines</h3>
        <p>Stay on top of your borrowed books with automatic fine tracking.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
