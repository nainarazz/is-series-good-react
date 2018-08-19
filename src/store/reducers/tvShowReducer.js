import * as actionTypes from '../actions/actionTypes';

const initialState = {
    show: {},
    similarShows: [],
    ratingsFromSites: {},
    isLoading: false,
    error: { errorMessage: "", isError: false }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TV_SHOW:
            return {
                ...state,
                show: { ...action.tvShow }
            };
        case actionTypes.SET_RATINGS_FROM_SITES:
            return {
                ...state,
                ratingsFromSites: { ...action.ratings }
            }
        case actionTypes.SET_SIMILAR_TV_SHOW:
            return {
                ...state,
                similarShows: [...action.similarShows]
            };
        case actionTypes.FETCH_SHOW_START:
            return {
                ...state,
                isLoading: true,
                error: false
            };
        case actionTypes.FETCH_SHOW_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        case actionTypes.FETCH_SHOW_FAILED:
            return {
                ...state,
                isLoading: false,
            };
        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: { isError: true, errorMessage: action.errorMessage }
            };
        default:
            return { ...state }
    }
}

export default reducer;