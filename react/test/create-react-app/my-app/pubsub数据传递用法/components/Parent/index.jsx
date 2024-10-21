import React, { Component } from "react";
import ChildOne from "../ChildOne";
import ChildTwo from "../ChildTwo";

export default class Parent extends Component {
  // componentDidMount() {
  //   console.log("Parent componentDidMount");
  // }
  // componentWillUnmount() {
  //   console.log("Parent componentWillUnmount");
  // }
  render() {
    return (
      <div>
        <div
          style={{
            height: "30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Parent
        </div>
        <ChildOne />
        <ChildTwo />
      </div>
    );
  }
}
