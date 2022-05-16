import React, { Component } from "react";
import { Row, Col, Button, Checkbox } from "antd";
import style from "./index.module.css";

export default class Footer extends Component {
  delSelectedItems = () => {
    this.props.delSelectedTodo();
  };

  resetItems = () => {
    this.props.resetTodo();
  };

  checkedAll = (e) => {
    this.props.selectAllTodos(e.target.checked);
  };

  render() {
    const { todos } = this.props;
    let selectedTodos = todos.filter((item) => {
      return !!item.done;
    });

    return (
      <Row>
        <Col span={12}>
          <div className={style["item-wrap"]}>
            <Checkbox
              onChange={this.checkedAll}
              checked={
                todos.length !== 0 && selectedTodos.length === todos.length
              }
            ></Checkbox>
            <span className={style["text"]}>
              已完成（
              {
                todos.filter((item) => {
                  return !!item.done;
                }).length
              }
              /{todos.length}
              ）个
            </span>
          </div>
        </Col>
        <Col span={12}>
          <div className={style["item-wrap-btn"]}>
            <Button
              onClick={this.delSelectedItems}
              type="primary"
              size="small"
              danger
            >
              删除已完成的计划
            </Button>
            {/* <Button onClick={this.resetItems} size="small">
              重置计划
            </Button> */}
          </div>
        </Col>
      </Row>
    );
  }
}
