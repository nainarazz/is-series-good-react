import axios from 'axios';

export const tmbdAxiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export const tvMazeAxiosInstance = axios.create({
    baseURL: 'https://api.tvmaze.com'
});
