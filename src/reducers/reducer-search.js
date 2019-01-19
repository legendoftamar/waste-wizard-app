//search reducer

const reducer_search = (state = null, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

export default reducer_search;