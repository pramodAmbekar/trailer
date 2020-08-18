import React from 'react';
import './App.css';
import Login from './components/login/login'
import {Navbar} from "react-bootstrap"
import { Switch, Route, NavLink, Redirect } from "react-router-dom"



function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-light bg-dark">

        {/* <NavLink className="navbar-brand text-white" to="/">Home</NavLink> */}
        <Navbar.Brand className="text-white" href="#home">Tune</Navbar.Brand>

      </nav>
      <Switch>
        <Route path={"/"} exact component={Login} />
        
        <Redirect to={"/"} /> 
      </Switch>
    </div>
  );
}

export default App;
