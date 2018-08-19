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

const setRatingsFromSites = (ratings) => {
    return {
        type: actionTypes.SET_RATINGS_FROM_SITES,
        ratings
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

const fetchShowFailed = () => {
    return {
        type: actionTypes.FETCH_SHOW_FAILED
    }
}

export const setError = (errorMessage) => {
    return {
        type: actionTypes.SET_ERROR,
        errorMessage
    }
}

export const fetchShowDetail = (tvShowId) => {
    return dispatch => {
        dispatch(fetchShowStart());
        tmbdAxiosInstance.get(`tv/${tvShowId}/external_ids?api_key=${TMBD_API_KEY}&language=en-US`)
            .then(res => {
                const imdbId = res.data.imdb_id;
                return Promise.all([
                    apiRequests(tmbdAxiosInstance, `tv/${tvShowId}?api_key=${TMBD_API_KEY}&language=en-US`, dispatch),
                    apiRequests(tvMazeAxiosInstance, `lookup/shows?imdb=${imdbId}`, dispatch),
                    apiRequests(tmbdAxiosInstance, `tv/${tvShowId}/similar?api_key=${TMBD_API_KEY}&language=en-US`, dispatch)
                ]);
            })
            .then(response => {
                const tmdbResult = response[0] && response[0].data;
                const tvMazeResult = response[1] && response[1].data;
                const similarShowsResult = response[2] && response[2].data.results;
                const topSimilarShows = similarShowsResult
                    .filter(s => s.original_language === "en" && s.vote_count > 10)
                    .sort(sortSimilarShowsDescending)
                    .slice(0, 10);

                const tmdbRating = tmdbResult && tmdbResult.vote_average;
                const tvMazeRating = tvMazeResult && tvMazeResult.rating && tvMazeResult.rating.average;

                const ratings = {
                    tmdb: tmdbRating, tvMaze: tvMazeRating
                };

                const overallRating = calculateOverallRating(ratings);
                ratings.overall_rating = overallRating;

                dispatch(setTvShow(tmdbResult));
                dispatch(setRatingsFromSites(ratings));
                dispatch(setSimilarTvShow(topSimilarShows));
                dispatch(fetchShowSuccess());
            }).catch(error => {
                console.log("error fetching show detail ", error);
                dispatch(fetchShowFailed());
                dispatch(setError(error.message));
            });
    };
}

function calculateOverallRating(ratings) {
    const raters = Object.keys(ratings);
    const ratingsSum = raters.reduce((acc, cur) => {
        return cur ? acc + ratings[cur] : 0;
    }, 0);

    // shows with 0 ratings should not be inclded in the average calculation
    const nonZeroRatings = raters.filter(key => ratings[key] > 0);

    const average = ratingsSum / nonZeroRatings.length;
    const rounded = Math.round(average * 10) / 10;
    return parseFloat(rounded.toFixed(1));

}

function sortSimilarShowsDescending(a, b) {
    var showA = a.vote_average;
    var showB = b.vote_average;

    if (showA > showB) {
        return -1;
    }

    if (showA < showB) {
        return 1;
    }

    return 0;
}

function apiRequests(axiosInstance, url, dispatch) {
    return new Promise((resolve, reject) => {

        axiosInstance.get(url).then(res => {
            resolve(res);
        }).catch(error => {
            resolve(null);
            dispatch(fetchShowFailed());
        });
    });
}