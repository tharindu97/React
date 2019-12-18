import React from 'react';
import faker from 'faker';

const CommentDetail = () =>{
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}></img>
                </a>
                <div className="content">
                    <a href="/" className="avatar">
                        Pakaya
                    </a>
                    <div className="metadata">
                        <span className="date"></span>
                    </div>
                    <div className="text">pakaya@gmail.com</div>
                </div>
        </div>
    );
}

export default CommentDetail;