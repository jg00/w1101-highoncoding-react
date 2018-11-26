import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Header";
import JumboTron from "./components/JumboTron";
import SectionContent from "./components/SectionContent";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Menu />
        </div>

        <div>
          <JumboTron />
        </div>

        <div>
          <SectionContent sectionTitle={"Hello WatchKit"} />
        </div>

        <div>
          <SectionContent sectionTitle={"Introduction to Swift"} />
        </div>
      </div>
    );
  }
}

export default App;
