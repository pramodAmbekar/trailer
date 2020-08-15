import {combineReducers} from "redux"
import PokemonListReducer from "./PokemonListReducers"
import PokemonDataReducer from "./PokemonDataReducer"
import MovieReducer from "./MovieReducer"

const RootReducer = combineReducers({
PokemonList: PokemonListReducer,
PokemonData: PokemonDataReducer,
MovieData: MovieReducer
})

export default RootReducer