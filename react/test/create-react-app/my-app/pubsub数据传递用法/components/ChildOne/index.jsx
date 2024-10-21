import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class ChildOne extends Component {
  // componentDidMount() {
  //   console.log("ChildOne componentDidMount");
  // }
  // componentWillUnmount() {
  //   console.log("ChildOne componentWillUnmount");
  // }
  handlePublish = () => {
    //PubSub发布
    PubSub.publish("pubsubjs", "pubsubjs发布的数据");
  };
  render() {
    return (
      <div
        style={{
          height: "30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ color: "pink" }}>ChildOne</span>
        <button
          style={{ marginLeft: "30px" }}
          type="button"
          onClick={this.handlePublish}
        >
          发布订阅
        </button>
      </div>
    );
  }
}
