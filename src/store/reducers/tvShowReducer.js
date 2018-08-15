import * as actionTypes from '../actions/actionTypes';

const initialState = {
    show: {},
    similarShows: [],
    isLoading: false
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
        case actionTypes.FETCH_SHOW_START:
            return {
                ...state,
                isLoading: true 
            };
        case actionTypes.FETCH_SHOW_SUCCESS:
            return {
                ...state,
                isLoading: false 
            };
        default:
            return { ...state }
    }
}

export default reducer;