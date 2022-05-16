import React, { Component } from "react";
import { Row, Col, Checkbox, Button } from "antd";
import style from "./index.module.css";

// const style = { background: '#0092ff', padding: '8px 0' };

export default class Item extends Component {
  state = {
    mouseFlag: false,
  };

  onChange = (e) => {
    // console.log(`checked = ${e.target.checked}`);
    this.props.selectTodo({ ...this.props, done: e.target.checked });
    // return (e) => {
    // console.log(`checked = ${e.target.checked}`);
    // };
  };
  onClick = (e) => {
    // console.log(`checked = ${e.target.checked}`);
    this.props.delTodo({ ...this.props, done: e.target.checked });
    // return (e) => {
    // console.log(`checked = ${e.target.checked}`);
    // };
  };
  mouseEvent = (flag) => {
    return (e) => {
      this.setState({
        mouseFlag: flag,
      });
    };
  };
  render() {
    const { value, done } = this.props;
    const { mouseFlag } = this.state;

    return (
      <Row
        style={{
          background: mouseFlag ? "#dedede" : "#fff",
        }}
        onMouseEnter={this.mouseEvent(true)}
        onMouseLeave={this.mouseEvent(false)}
      >
        <Col span={20}>
          <div className={style["item-wrap"]}>
            <Checkbox onChange={this.onChange} checked={done}>
              {value}
            </Checkbox>
          </div>
        </Col>
        <Col span={4}>
          <div
            className={style["item-wrap"]}
            style={{ display: mouseFlag ? "flex" : "none" }}
          >
            <Button onClick={this.onClick} type="primary" size="small" danger>
              删除
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}
