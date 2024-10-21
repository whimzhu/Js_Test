import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import "./index.css";

export default function MyNavLink(props) {
  return (
    <NavLink {...props}>
      <Button className="antd-btn">{props.children}</Button>
    </NavLink>
  );
}
