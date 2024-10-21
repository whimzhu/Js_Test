import { connect } from "react-redux";
import React, { Component } from "react";
import { InputNumber, Button } from "antd";

import { createAsyncAddAction } from "../../redux/actions/count";

class CountUI extends Component {
  state = {
    value1: 0,
    value2: 0,
  };

  add = () => {
    const { value1, value2 } = this.state;
    this.props.add({ value1, value2 });
  };

  render() {
    const { value1, value2 } = this.state;
    const { total, persons } = this.props;

    return (
      <div>
        <h2>我是Count组件，Person组件的录入人数是:{persons.length}</h2>
        <InputNumber
          value={value1}
          onChange={(val) => this.setState({ value1: val })}
        />{" "}
        +
        <InputNumber
          value={value2}
          onChange={(val) => this.setState({ value2: val })}
        />
        <Button type="link" onClick={this.add}>
          =
        </Button>
        {total}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    total: state.count,
    persons: state.persons,
  }),
  { add: createAsyncAddAction }
)(CountUI);
