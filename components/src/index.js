import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            
            <ApprovalCard>
                <h4>Warning!</h4> 
            </ApprovalCard> 

            <ApprovalCard> 
                <CommentDetails 
                author = "Sam" 
                timeAgo="12-12-2019" 
                content = "I am a Sam"
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetails 
                author = "Alex" 
                timeAgo="4.00 PM"
                content = "I am a Alex"
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard> 
            <ApprovalCard> 
                <CommentDetails 
                author = "Jane" 
                timeAgo="12-09-2019"
                content = "I am a Jane"
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard> 
            <ApprovalCard> 
                <CommentDetails 
                author = "Panama" 
                timeAgo="6.00 AM"
                content = "I am a Panama"
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard> 
        </div>
    );
}

ReactDOM.render(<App /> , document.querySelector('#root'));