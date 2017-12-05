import axios from 'axios';

export const FETCH_MOVIES = 'fetch_movies';
export const FETCH_MOVIE = 'fetch_movie';

const ROOT_URL = 'https://ghibliapi.herokuapp.com';

export function fetchMovies() {
    const request = axios.get(`${ROOT_URL}/films`)

    return {
        type: FETCH_MOVIES,
        payload: request
    }
}

export function fetchMovie(id) {
    const request = axios.get(`${ROOT_URL}/films/${id}`)

    return {
        type: FETCH_MOVIE,
        payload: request
    }

}