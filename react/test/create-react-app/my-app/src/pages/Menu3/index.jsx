import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { Button } from "antd";

export default function Menu3() {
  const navigate = useNavigate();
  const [news, setNews] = useState([
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
  ]);

  function goForward() {
    navigate(1);
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <div>
      <h2>Menu3</h2>
      <ul>
        {news.map((item) => {
          return (
            <li key={item.id}>
              {/* params传递 */}
              <Link to={`news/${item.id}/${item.title}`}>{item.title}</Link>
              {/* search传递 */}
              {/* <Link to={`news?id=${item.id}&title=${item.title}`}>
                {item.title}
              </Link> */}
              {/* state传递 */}
              {/* <Link to="news" state={{ id: item.id, title: item.title }}>
                {item.title}
              </Link> */}
            </li>
          );
        })}
      </ul>
      <Button onClick={() => goForward()} type="primary">
        前进
      </Button>
      <Button onClick={() => goBack()}>后退</Button>
      <hr />
      {/* 下级路由在此呈现 */}
      <Outlet />
    </div>
  );
}
