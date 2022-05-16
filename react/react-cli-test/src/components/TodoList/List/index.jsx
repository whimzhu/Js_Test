import React, { Component } from "react";
import Item from "../Item";
import style from "./index.module.css";

export default class index extends Component {
  render() {
    const { todos, selectTodo, delTodo } = this.props;
    return (
      <div className={style["list-wrap"]}>
        {todos.map((item) => {
          return (
            <Item
              key={item.id}
              {...item}
              selectTodo={selectTodo}
              delTodo={delTodo}
            />
          );
        })}
      </div>
    );
  }
}
