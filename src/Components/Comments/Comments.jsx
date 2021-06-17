/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import styles from './Comments.css';

export default props => {
  if (!props) return <p>No data</p>;
  return props.comments.map(comment => {
    if (props.postId === comment.postId) {
      return (
        <div className="wrapper">
          <div className="name">{comment.name}</div>
          <div className="email">{comment.email}</div>
          <div className="comment">{comment.body}</div>
        </div>
      );
    }
  });
};
