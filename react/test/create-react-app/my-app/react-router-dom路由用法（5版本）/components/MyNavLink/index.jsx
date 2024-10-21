import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import "./index.css";

export default class MyNavLink extends Component {
  render() {
    console.log("MyNavLink", this.props);
    return (
      <NavLink {...this.props}>
        <Button className="antd-btn">{this.props.children}</Button>
      </NavLink>
    );
  }
}
