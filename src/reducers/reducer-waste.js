//waste reducer

const reducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {};
    case "FETCH_SUCCESS":
      return { ...state, waste: action.payload };
    default:
      return state;
  }
}

export default reducer;