import React, { Component } from "react";
import Header from "./components/TodoList/Header";
import List from "./components/TodoList/List";
import Footer from "./components/TodoList/Footer";
import "./TodoList.css";

export default class TodoList extends Component {
  state = {
    todos: [
      { id: 1, value: "吃饭", done: true },
      { id: 2, value: "上网", done: true },
    ],
  };

  addTodo = (item) => {
    this.setState({ todos: [item, ...this.state.todos] });
  };

  selectTodo = (item) => {
    const newTodos = this.state.todos.map((_item) => {
      if (_item.id === item.id) {
        return {
          ..._item,
          done: item.done,
        };
      } else {
        return _item;
      }
    });
    this.setState({ todos: newTodos });
  };

  selectAllTodos = (checked) => {
    const newTodos = this.state.todos.map((_item) => {
      return {
        ..._item,
        done: checked,
      };
    });
    this.setState({ todos: newTodos });
  };

  delTodo = (item) => {
    const newTodos = this.state.todos.reduce((result, _item) => {
      if (_item.id !== item.id) {
        result.push(_item);
      }
      return result;
    }, []);
    this.setState({ todos: newTodos });
  };

  delSelectedTodo = () => {
    const newTodos = this.state.todos.reduce((result, _item) => {
      if (!_item.done) {
        result.push(_item);
      }
      return result;
    }, []);
    this.setState({ todos: newTodos });
  };

  // resetTodo = () => {
  //   this.setState({ todos: this._todos });
  // };

  render() {
    return (
      <div className="wrap">
        <Header addTodo={this.addTodo} />
        <List
          selectTodo={this.selectTodo}
          delTodo={this.delTodo}
          todos={this.state.todos}
        />
        <Footer
          selectAllTodos={this.selectAllTodos}
          delSelectedTodo={this.delSelectedTodo}
          resetTodo={this.resetTodo}
          todos={this.state.todos}
        />
      </div>
    );
  }
}
