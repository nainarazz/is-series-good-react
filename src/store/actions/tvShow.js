import * as actionTypes from './actionTypes';
import { tmbdAxiosInstance } from '../../axios';
import { TMBD_API_KEY } from '../../api-constants';

const setTvShow = (show) => {
    return {
        type: actionTypes.SET_TV_SHOW,
        tvShow: show
    }
}

export const fetchShowDetail = (tvShowId) => {
    return dispatch => {
        tmbdAxiosInstance.get(`tv/${tvShowId}?api_key=${TMBD_API_KEY}&language=en-US`)
            .then(response => {
                dispatch(setTvShow(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    };
}