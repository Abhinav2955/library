import React from 'react'
import './News.css'

function News() {
    return (
        <div className='news-container'>
            <h1 className='news-title'>Updates for You</h1>
            <div className='news-data'>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Competitions</h1>
                    <div>
                        <div className='news-competition-event'>
                            <p>Book Review Writing Contest</p>
                            <p>Submit a review of your favorite book from our library and win 
                                exciting prizes. Open to all registered members.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Reading Marathon Challenge</p>
                            <p>Read the most books this month and top the leaderboard to earn 
                                a certificate of recognition.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Best Library User Award</p>
                            <p>Awarded quarterly to the member with the most consistent and 
                                responsible borrowing record.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Poster Design Contest</p>
                            <p>Design a poster promoting reading culture on campus. Winning 
                                entries will be displayed in the library.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Short Story Writing</p>
                            <p>Write an original short story inspired by any genre available 
                                in our collection.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Online Quiz</h1>
                    <div>
                        <div className='news-quiz-event'>
                            <p>General Knowledge Quiz</p>
                            <p>Test your GK with our weekly quiz. New questions added every 
                                Monday.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Literature Trivia</p>
                            <p>How well do you know classic and contemporary literature? 
                                Find out here.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Science & Technology Quiz</p>
                            <p>Stay updated with the latest in science and tech through this 
                                fun quiz series.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>History Buff Challenge</p>
                            <p>Explore historical facts and events through this engaging 
                                quiz round.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Current Affairs Quiz</p>
                            <p>A monthly quiz covering recent events and important 
                                developments.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
            </div>
        </div>
    )
}

export default News