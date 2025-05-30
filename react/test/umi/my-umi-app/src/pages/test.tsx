import React, { useMemo, useState, useCallback, memo, useRef } from "react";

// UseMemo 缓存计算结果

const TestPage = () => {
  const [count, setCount] = useState(0);
  const [list] = useState([1, 2, 3, 4, 5]);

  console.log("渲染");

  // 仅当 list 变化时重新计算
  const filteredList = useMemo(() => {
    console.log("重新计算 filteredList");
    return list.filter((num) => num > 2);
  }, [list]);

  // 直接计算，不再缓存
  const filteredList1 = list.filter((num) => num > 2);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>点击次数：{count}</button>
      <ul>
        {filteredList.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <ul>
        {filteredList1.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

// UseCallback 避免无效渲染

interface ChildProps {
  onClick: () => void;
}

// 子组件：使用 memo 避免无效渲染
const Child: React.FC<ChildProps> = memo(({ onClick }) => {
  console.log("子组件渲染");
  return <button onClick={onClick}>子组件按钮</button>;
});

// const Child: React.FC<ChildProps> = ({ onClick }) => {
//   console.log("子组件渲染");
//   return <button onClick={onClick}>子组件按钮</button>;
// };

const TestPage1 = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const dataRef = useRef({ count: 0, name: "John" });

  console.log("父组件渲染");

  // 使用 useCallback 缓存函数
  const handleClick = useCallback(() => {
    console.log("点击次数：", count);
  }, [count]); // 依赖 count，count 变化时函数更新

  // const handleClick = () => {
  //   console.log("点击次数：", count);
  // }; // 依赖 count，count 变化时函数更新

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>父组件按钮：{count}</button>
      <button onClick={() => dataRef.current.count++}>
        dataRef按钮：{dataRef.current.count}
      </button>
    </div>
  );
};

export default TestPage1;
