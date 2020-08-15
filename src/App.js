import React from 'react';
import './App.css';
// import PokemonList from './container/pokemonList'
// import Pokemon from './container/pokemonData'
import {Switch, Route, NavLink, Redirect } from "react-router-dom"
import PopularMovies from './container/movies/popularMovies'


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <NavLink className="navbar-brand text-white" to="/">Home</NavLink>
      </nav>
      {/* <MyCarousel/> */}
      <Switch>
      <Route path={"/"} exact component={PopularMovies}/>      
        {/* <Route path={"/pokemon/:pokemon"}  component={Pokemon}/> */}
        <Redirect to={"/"}/>
      </Switch>
    </div>
  );
}

export default App;
