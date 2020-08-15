import axios from "axios"

export const GetPokemonList = (page) => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_LIST_LOADING"
        })
        const pageLimit = 10
        const pageOffSet = (parseInt(page) * 10) - pageLimit
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${pageOffSet}&limit=${pageLimit}`)
        dispatch({
            type: "POKEMON_LIST_SUCCESS",
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: "POKEMON_LIST_FAILED"
        })
    }
}

export const GetPokemonData = (pokemon) => async dispatch => {
    try {
        dispatch({
            type: "POKEMON_DATA_LOADING"
        })
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        dispatch({
            type: "POKEMON_DATA_SUCCESS",
            payload: res.data,
            name: pokemon
        })
    } catch (e) {
        dispatch({
            type: "POKEMON_DATA_FAILED"
        })
    }
}