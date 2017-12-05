import axios from 'axios';

export const FETCH_MOVIES = 'fetch_movies';

const ROOT_URL = 'https://ghibliapi.herokuapp.com';

export function fetchMovies() {
    const request = axios.get(`${ROOT_URL}/films`)

    return {
        type: FETCH_MOVIES,
        payload: request
    }
}