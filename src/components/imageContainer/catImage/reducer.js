export const reducer = (state, action) => {
    switch(action.type) {
        case 'voteChange': return onVoteChange(state, action);
        case 'favouriteChange': return onFavouriteChange(state, action);
        default:
            return state;

    }
  }

const onVoteChange = (state, action) => {
    // Perform any action related manipulation
    if (state.vote === action.payload) {
        return state;
    } else {
        return {...state, vote: action.payload}
    }
}

const onFavouriteChange = (state, action) => {
    if (state.favourite === action.payload) {
        return state;
    } else { 
        return {...state, favourite: action.payload}
    }
}