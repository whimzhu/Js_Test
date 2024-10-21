export const createAddAction = (data) => ({ type: "countAdd", data });

export const createAsyncAddAction = (data) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createAddAction(data));
    }, 500);
  };
};
