import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetPokemonData } from '../action/pokemonAction'
import _ from "lodash"
const PokemonData = (props) => {
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.PokemonData)
    const pokemonName = props.match.params.pokemon

    React.useEffect(() => {
        fetchPokemonData()
    }, [])

    const fetchPokemonData = () => {
        dispatch(GetPokemonData(pokemonName))
    }
    const showData = () => {
        if (!_.isEmpty(pokemon.data[pokemonName])) {
            const pokemonData = pokemon.data[pokemonName]
            console.log(pokemonData.moves)
            return (
                <div>
                    <div class="jumbotron bg-white">
                        <h1 class="display-5">{pokemonName}</h1>
                    </div>
                    <div>
                        <img src={pokemonData.sprites.front_default} />
                        <img src={pokemonData.sprites.back_default} />
                        <img src={pokemonData.sprites.front_shiny} />
                        <img src={pokemonData.sprites.front_shiny} />

                    </div>
                    {/* <div>
                        {
                            pokemonData.moves.map(move=> {
                                return <img src={move.move.url}/>
                            })
                        }
                    </div> */}
                </div>
            )
        }
        if (pokemon.loading) {
            return (
                <div>Loading</div>
            )
        }
    }

    return (

        <div>{showData()}</div>
    )

}

export default PokemonData