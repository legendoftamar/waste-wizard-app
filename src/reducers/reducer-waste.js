//sets the value for the reducer based on action

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