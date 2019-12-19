import React from 'react';
import faker from 'faker';

const CommentDetail = props =>{
    console.log(props);
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}></img>
                </a>
                <div className="content">
                    <a href="/" className="avatar">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">pakaya@gmail.com</div>
                </div>
        </div>
    );
}

export default CommentDetail;