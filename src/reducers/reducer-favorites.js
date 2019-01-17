
const initialState =  { favorites: [] };

const reducer_favorites = (state = initialState, action) => {
    console.log(action.payload);
    console.log(state);
    switch (action.type) {
        case "FAVORITE": {
        return {
            ...state,
            favorites: [...state.favorites, action.payload]
          }; }
      default:
        return state;
    }
}

export default reducer_favorites;