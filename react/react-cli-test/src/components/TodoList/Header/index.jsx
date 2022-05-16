import React, { Component } from "react";
import { Input, message } from "antd";
import { nanoid } from "nanoid";

export default class Header extends Component {
  state = {
    inputValue: "",
  };

  addItem = (e) => {
    // const { value } = e.target;
    const { inputValue } = this.state;

    if (!inputValue.trim()) {
      message.error("请输入要增加的计划！");
      return false;
    }

    this.props.addTodo({ id: nanoid(), value: inputValue, done: false });

    // e.target.value = "";
    this.setState({ inputValue: "" });
  };

  onChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div>
        <Input
          value={this.state.inputValue}
          placeholder="请输入要增加的计划，回车确认"
          onPressEnter={this.addItem}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
