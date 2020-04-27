import React, { Component } from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

class CommentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        {
          id: 1,
          author: "James Bond",
          text: "IMO react is better than Vue!"
        },
        {
          id: 2,
          author: "Billy the Fridge",
          text: "I have no strong opinion about this."
        }
      ]
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(submittedComment) {
    submittedComment.id = Date.now();
    const updatedComments = [...this.state.comments, submittedComment];
    this.setState({
      comments: updatedComments
    });
  }

  render() {
    return (
      <div className="comment-container">
      <h2>Add a Comment</h2>
      <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      <h2>Comments</h2>
      <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentContainer;
