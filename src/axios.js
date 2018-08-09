import axios from 'axios';

export const tmbdInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export const tvMazeinstance = axios.create({
    baseURL: 'http://api.tvmaze.com'
});
