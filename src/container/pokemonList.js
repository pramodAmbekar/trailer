import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetPokemonList } from '../action/pokemonAction'
import _ from "lodash"
import Card from './cardContainner'

const PokemonList = (props) => {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList)
    React.useEffect(() => {
        fetchData(1)
    }, [])
    const fetchData = (page = 1) => {
        dispatch(GetPokemonList(page))
    }
    const showData = () => {
        if (!_.isEmpty(pokemonList.data)) {
            // return <div>found</div>
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            {pokemonList.data.map((pokemon) => {
                                return (
                                    <Card name={pokemon.name} />
                                )
                            })}
                        </div>
                    </div>

                </div>
            )

        }
        if (pokemonList.loading) {
            return <p> loading...</p>
        }
        if (pokemonList.errorMsg !== "") {
            return <p>{pokemonList.errorMsg}</p>
        }
    }
    return (
        <div>
            {showData()}
        </div>
    )
}
export default PokemonList