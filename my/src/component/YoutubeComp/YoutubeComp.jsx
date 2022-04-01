import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = () => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i0.wp.com/www.blogpress.id/wp-content/uploads/2020/06/YouTube-Thumbnail-Size.jpg?fit=750%2C500&ssl=1" alt="" />
                <p className="time">7.12</p>
            </div>
            <p className="title">title here</p>
            <p className="desc">desc here</p>
        </div>
    )
}

export default YoutubeComp;