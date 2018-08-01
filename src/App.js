import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import MovieList from './movies/MovieList';
import MovieDetails from './movies/MovieDetails'
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import Toggle from './toggle/Toggle'
import {composeWithDevTools} from 'redux-devtools-extension';
import {logger} from 'redux-logger'
const middelware=[logger,thunk];

const store=createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middelware)),
);
const  App=()=> (
<Provider store={store}>
  <Router>
      <div className="App">
        <header className="App-header">
        <Link to="/"> 
        <img src={logo} className={"App-logo"} alt="logo"/>
        </Link> 
        </header>
        <Toggle/>
        <Switch>
        <Route exact  path="/" component={MovieList}/>
        <Route path="/:id" component={MovieDetails}/>
        </Switch>
      </div>
      </Router>
</Provider>
    );




export default App;
