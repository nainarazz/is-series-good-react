import * as actionTypes from '../actions/actionTypes';

const initialState = {
    show: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case actionTypes.SET_TV_SHOW:
            console.log(action.tvShow);
            return {
                ...state,
                show: { ...action.tvShow } 
            };
        default:
            return { ...state }
    }
}

export default reducer;