import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetails/>
            <CommentDetails/>
            <CommentDetails/>
            <CommentDetails/>
        </div>
    );
}

ReactDOM.render(<App /> , document.querySelector('#root'));