import React, { Component } from "react";
import qs from "qs";

export default class News extends Component {
  render() {
    console.log(this.props);
    // params传递
    // const { title } = this.props.match.params;
    // search传递
    const { search } = this.props.location;
    const { title } = qs.parse(search.slice(1));
    // state传递（页面刷新会失去state数据）
    // const { title } = this.props.location.state || {};
    return <div>{title}</div>;
  }
}
