// 安装依赖：npm install redux react-redux
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

// 定义 reducer
const counterReducer = (state = { count: 0 }, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 创建 store
const store = createStore(counterReducer);

// 组件
const CounterComponent = () => {
  const count = useSelector((state: { count: number }) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

// 根组件
const ReduxPage = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default ReduxPage;
