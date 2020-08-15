import axios from "axios"

export const getPopularMovies = (page) => async dispatch => {
    try {
        dispatch({
            type: 'POPULAR_MOVIES_LOADING'
        })
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7810ab7b506cda58f0ecdc348a7b1e21&language=en-US&page=${page}`)
        dispatch({
            type: "POPULAR_MOVIES_SUCCESS",
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: 'POPULAR_MOVIES_FAILED'
        })
    }
}
export const topRatedMovies = (page) => async dispatch => {
    try {
        dispatch({
            type: 'TOP_MOVIES_LOADING'
        })
        const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=7810ab7b506cda58f0ecdc348a7b1e21&language=en-US&page=1${page}`)
        dispatch({
            type: "TOP_MOVIES_SUCCESS",
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: 'TOP_MOVIES_FAILED'
        })
    }
}