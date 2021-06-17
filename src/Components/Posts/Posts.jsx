/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Posts.css';
import Comments from '../Comments/Comments';

export default props => {
  const comments = props.comments;
  const posts = props.posts;

  if (!posts) return <p>No data</p>;
 
  return posts.map(post => (
    <div key={post.id}>
      <div>
        <div>{post.title}</div>
      </div>
      <div>{post.body}</div>

      <Comments postId={post.id} comments={comments} />
    </div>
  ));
};
