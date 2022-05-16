import React, { Component } from "react";

class Demo extends Component {
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    return <div>hello,{this.props.name}</div>;
  }
}

export default Demo;
