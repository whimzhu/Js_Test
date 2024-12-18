import React, { useState, useEffect, useLayoutEffect } from "react";
import { Button } from "antd";

export default function Menu1() {
  const [text, setText] = useState("Menu1");

  const setTextHandle = () => {
    setText("Menu2");
  };

  // 异步，渲染后执行
  // useEffect(() => {
  //   if (text === "Menu2") {
  //     setText("Menu3");
  //   }
  // }, [text]);

  // 同步，渲染前执行
  useLayoutEffect(() => {
    if (text === "Menu2") {
      setText("Menu3");
    }
  }, [text]);

  return (
    <div>
      <h2>{text}</h2>
      <Button type="primary" onClick={setTextHandle}>
        点击更改标题
      </Button>
    </div>
  );
}
