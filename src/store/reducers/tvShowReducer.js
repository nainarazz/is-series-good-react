import * as actionTypes from '../actions/actionTypes';

const initialState = {
    show: {},
    similarShows: []
}

const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case actionTypes.SET_TV_SHOW:
            return {
                ...state,
                show: { ...action.tvShow } 
            };
        case actionTypes.SET_SIMILAR_TV_SHOW:
            return {
                ...state,
                similarShows: [...action.similarShows] 
            };
        default:
            return { ...state }
    }
}

export default reducer;