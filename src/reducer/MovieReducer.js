const DefaultState = {
    popularMoviesLoading: false,
    popularMovies: [],
    topRatedMoviesLoading: false,
    topRatedMovies: [],
    fetchTrailerLoading: false,
    fetchTrailer: [],
    page: 0
}

const PopularMovies = (state = DefaultState, action) => {
    switch (action.type) {
        case "POPULAR_MOVIES_LOADING":
            return {
                ...state,
                popularMoviesLoading: true,
                popularMovies: [],
            }
        case "POPULAR_MOVIES_SUCCESS":
            return {
                ...state,
                popularMoviesLoading: false,
                popularMovies: action.payload.results,
                page: action.payload.page
            }
        case "TOP_MOVIES_SUCCESS":
            return {
                ...state,
                topRatedMoviesLoading: false,
                topRatedMovies: action.payload.results,
                page: action.payload.page
            }
        case "TOP_MOVIES_LOADING":
            return {
                ...state,
                topRatedMoviesLoading: true,
                topRatedMovies: []
            }
        case "SEARCH_TRAILER_LOADING":
            return {
                ...state,
                fetchTrailerLoading: false,
                fetchTrailer: []
            }
        case "SEARCH_TRAILER_SUCCESS":
            console.log(action.payload)
            return {
                ...state,
                fetchTrailerLoading: false,
                fetchTrailer: action.payload.items

            }
        case "SEARCH_TRAILER_FAILED":
            return {
                ...state,
                fetchTrailerLoading: false
            }
        default:
            return state
    }
}

export default PopularMovies