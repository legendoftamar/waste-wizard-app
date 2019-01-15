//action creator
export const selectUser = (user) => {
    console.log(user.name)
    //returns action
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
