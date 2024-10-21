const initState = [];

export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  console.log(preState, action);
  switch (type) {
    case "personAdd":
      return [data, ...preState];
    default:
      return preState;
  }
}
