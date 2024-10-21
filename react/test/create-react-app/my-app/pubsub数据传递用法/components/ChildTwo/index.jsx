import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class ChildTwo extends Component {
  componentDidMount() {
    console.log("ChildTwo componentDidMount");
    //PubSub订阅
    this.token = PubSub.subscribe("pubsubjs", (msg, data) => {
      console.log("pubsubjs", data);
    });
  }
  componentWillUnmount() {
    console.log("ChildTwo componentWillUnmount");
    //PubSub清除订阅
    PubSub.unsubscribe("pubsubjs");
  }
  render() {
    return (
      <div
        style={{
          height: "30px",
          display: "flex",
          alignItems: "center",
          color: "skyBlue",
        }}
      >
        ChildTwo
      </div>
    );
  }
}
