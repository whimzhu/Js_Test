import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import News from "./News";
import { Button } from "antd";

export default class Menu3 extends Component {
  state = {
    news: [
      {
        id: 1,
        title: "新闻1",
      },
      {
        id: 2,
        title: "新闻2",
      },
      {
        id: 3,
        title: "新闻3",
      },
    ],
  };
  goForward = () => {
    this.props.history.goForward();
  };
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    const { news } = this.state;
    return (
      <div>
        <h2>Menu3</h2>
        <ul>
          {news.map((item) => {
            return (
              <li key={item.id}>
                {/* params传递 */}
                {/* <Link to={`/menu3/news/${item.id}/${item.title}`}>
                {item.title}
              </Link> */}
                {/* search传递 */}
                <Link to={`/menu3/news?id=${item.id}&title=${item.title}`}>
                  {item.title}
                </Link>
                {/* state传递 */}
                {/* <Link
                  to={{
                    pathname: "/menu3/news",
                    state: { id: item.id, title: item.title },
                  }}
                >
                  {item.title}
                </Link> */}
              </li>
            );
          })}
        </ul>
        <Button onClick={this.goForward} type="primary">
          前进
        </Button>
        <Button onClick={this.goBack}>后退</Button>
        <hr />
        <Switch>
          {/* params传递 */}
          {/* <Route path="/menu3/news/:id/:title" component={News}></Route> */}
          {/* search传递 */}
          <Route path="/menu3/news" component={News}></Route>
          {/* state传递 */}
          {/* <Route path="/menu3/news" component={News}></Route> */}
        </Switch>
      </div>
    );
  }
}
