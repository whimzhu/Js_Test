const initState = 0;

export default function countReducer(preState = initState, action) {
  const { type, data } = action;

  console.log(preState, action);

  switch (type) {
    case "countAdd":
      return data.value1 + data.value2;
    default:
      // 初始化
      return preState;
  }
}
