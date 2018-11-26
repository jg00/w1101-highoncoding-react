import React, { Component } from "react";
import "./Header.css";

class Menu extends Component {
  render() {
    return (
      <div className="menu-div">
        <div id="item1">HighOnCoding</div>
        <div id="item2">Home</div>
        <div id="item2">Categories</div>
      </div>
    );
  }
}

export default Menu;
