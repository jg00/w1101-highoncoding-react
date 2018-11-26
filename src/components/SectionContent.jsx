import React, { Component } from "react";
import "./SectionContent.css";
import CommentsLikes from "./CommentsLikes";

class SectionContent extends Component {
  render() {
    return (
      <div className="section-content-div">
        <h5>{this.props.sectionTitle}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dicta
          perspiciatis magnam, cupiditate voluptatum repellat architecto sint
          doloremque hic inventore!
        </p>
        <div>
          <CommentsLikes commentCount={51} likesCount={121} />
        </div>
      </div>
    );
  }
}

export default SectionContent;
