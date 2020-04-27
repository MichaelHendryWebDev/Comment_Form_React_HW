import React from 'react';

function Comment({children, author}) {
  return (
    <div className="comment">
    <h4>{ children}</h4>
    <p>{ author }</p>
    </div>
  );
}

export default Comment;
