import React, { Component } from "react";
import "./CommentsLikes.css";
import App from "../App.js";

class CommentsLikes extends Component {
  render() {
    return (
      <div className="comments-likes-div">
        <div className="comments">{this.props.commentCount} comments</div>
        <div className="likes">{this.props.likesCount} likes</div>
      </div>
    );
  }
}

export default CommentsLikes;
