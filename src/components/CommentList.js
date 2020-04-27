import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  const commentNodes = comments.map(({ id, author, text}) => {
    return (
      <Comment author={author} key={id}>{text}</Comment>
    );
  });

  return(
    <div className="comment-list">
    { commentNodes }
    </div>
  )
}

export default CommentList;
