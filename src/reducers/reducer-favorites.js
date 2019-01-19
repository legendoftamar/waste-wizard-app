//favorites reducer

const initialState = { favorites: [] };

const reducer_favorites = (state = initialState, action) => {
    switch (action.type) {
        case "FAVORITE": {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        }
        case "UNFAVORITE": {
            state.favorites = state.favorites.filter(element => action.payload.title != element.title)
            return {
                ...state,
                favorites: [...state.favorites]
            };
        }

        default:
            return state;
    }
}

export default reducer_favorites;