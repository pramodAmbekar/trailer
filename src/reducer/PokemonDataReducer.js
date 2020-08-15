const DefaultStatus = {
    loading: false,
    data: {},
    errorMsg: ""
}

const PokemonDataReducer = (state = DefaultStatus, action) => {
    switch (action.type) {
        case "POKEMON_DATA_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            }
        case "POKEMON_DATA_SUCCESS":
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.name]: action.payload
                }
            }
        case "POKEMON_DATA_FAILED":
            return {
                ...state,
                loading: false,
                errorMsg: "falied to get pokemon data"
            }
        default:
            return state
    }
}

export default PokemonDataReducer