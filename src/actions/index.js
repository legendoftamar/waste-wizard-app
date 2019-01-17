//action creators

export const search = (search) => {
    //returns action
    return {
        type: 'SEARCH',
        payload: search
    }
};

export const fetchWasteRequest = () => {
    return {
      type: "FETCH_REQUEST"
    }
  };
  
export const fetchWasteSuccess = (payload) =>  {
    return {
      type: "FETCH_SUCCESS",
      payload: payload
    }
  };
  
export const fetchWasteError = () =>  {
    return {
      type: "FETCH_ERROR"
    }
  };

  export const favorite = (title, body) =>  {
    return {
      type: "FAVORITE",
      payload: {title, body}
    }
  };
