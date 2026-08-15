import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="/assets/images/lib1.jpg" alt=''/>
                <img src="/assets/images/lib2.jpg" alt=''/>
                <img src="/assets/images/lib3.jpg" alt=''/>
                <img src="/assets/images/lib4.jpg" alt=''/>
                <img src="/assets/images/lib5.jpg" alt=''/>
                <img src="/assets/images/lib6.jpg" alt=''/>
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery