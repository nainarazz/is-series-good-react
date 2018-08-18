import * as actionTypes from './actionTypes';
import { tmbdAxiosInstance, tvMazeAxiosInstance } from '../../axios';
import { TMBD_API_KEY } from '../../api-constants';

const setTvShow = (tvShow) => {
    return {
        type: actionTypes.SET_TV_SHOW,
        tvShow
    }
}

const setSimilarTvShow = (similarShows) => {
    return {
        type: actionTypes.SET_SIMILAR_TV_SHOW,
        similarShows
    }
}

const fetchShowStart = () => {
    return {
        type: actionTypes.FETCH_SHOW_START
    }
}

const fetchShowSuccess = () => {
    return {
        type: actionTypes.FETCH_SHOW_SUCCESS
    }
}

function calculateOverallRating (ratings) {
    const raters = Object.keys(ratings);
    const ratingsSum =  raters.reduce((acc, cur) => {
        return cur ? acc + ratings[cur] : 0;
    }, 0);

    const average =  ratingsSum / raters.length;
    const rounded = Math.round (average * 10) / 10;
    return rounded.toFixed(1);

}

export const fetchShowDetail = (tvShowId) => {
    return dispatch => {
        dispatch(fetchShowStart());
        tmbdAxiosInstance.get(`tv/${tvShowId}/external_ids?api_key=${TMBD_API_KEY}&language=en-US`)
        .then(res => {
            console.log("external ids ", res);
            const imdbId = res.data.imdb_id;
            return Promise.all([
                tmbdAxiosInstance.get(`tv/${tvShowId}?api_key=${TMBD_API_KEY}&language=en-US`),
                tvMazeAxiosInstance.get(`lookup/shows?imdb=${imdbId}`),
                tmbdAxiosInstance.get(`tv/${tvShowId}/similar?api_key=${TMBD_API_KEY}&language=en-US`),
            ]);    
        })
        .then(response => {
            const tmdbResult = response[0].data;
            const tvMazeResult = response[1].data;
            const similarShowsResult = response[2].data.results;
            const topSimilarShows = similarShowsResult.slice(0, 10);

            console.log("tv maze results ", tvMazeResult);
            const tmdbRating = tmdbResult && tmdbResult.vote_average;
            const tvMazeRating = tvMazeResult && tvMazeResult.rating && tvMazeResult.rating.average; 
    
            const ratings = {
                tmdb: tmdbRating, tvMaze: tvMazeRating
            };
            const overallRating = calculateOverallRating(ratings);
            ratings.overall_rating = overallRating;
            tmdbResult.ratings_from_sites = ratings;

            console.log("Overall rating", overallRating);
            dispatch(setTvShow(tmdbResult));
            console.log("tmdb results ", tmdbResult);

            dispatch(setSimilarTvShow(topSimilarShows));
            dispatch(fetchShowSuccess());
        }).catch(error => {
                console.log(error);
            });
    };
}