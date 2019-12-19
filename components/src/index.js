import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetails author = "Sam" timeAgo="12-12-2019"/>
            <CommentDetails author = "Alex" timeAgo="4.00 PM"/>
            <CommentDetails author = "Jane" timeAgo="12-09-2019"/>
            <CommentDetails author = "Panama" timeAgo="6.00 AM"/> 
        </div>
    );
}

ReactDOM.render(<App /> , document.querySelector('#root'));