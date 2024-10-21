import React, { Component } from "react";
import { Input, Button, Table } from "antd";
import { nanoid } from "nanoid";
import { connect } from "react-redux";

import { createAddAction } from "../../redux/actions/person";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
];

class PersonUI extends Component {
  state = {
    name: "",
    age: "",
  };

  add = () => {
    const { name, age } = this.state;
    const person = { key: nanoid(), name, age };
    this.props.add(person);
    this.setState({ name: "", age: "" });
  };

  render() {
    const { persons, total } = this.props;
    const { name, age } = this.state;

    return (
      <div>
        <h2>我是Person组件，Count组件的求和结果是{total}</h2>
        <Input
          placeholder="姓名"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <Input
          placeholder="年龄"
          value={age}
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <Button onClick={this.add} type="primary">
          添加
        </Button>
        <Table dataSource={persons} columns={columns} />
      </div>
    );
  }
}

export default connect(
  (state) => ({ persons: state.persons, total: state.count }),
  {
    add: createAddAction,
  }
)(PersonUI);
