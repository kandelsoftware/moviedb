import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import MovieList from './MovieList';
import MovieDetails from './MovieDetails'
import rootReducer from './rootReducer';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {logger} from 'redux-logger'
import Toggle from './Toggle'
import {composeWithDevTools} from 'redux-devtools-extension';
const store=createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(logger)),
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
        <Switch>
        <Route exact  path="/" component={MovieList}/>
        <Route path="/:id" component={MovieDetails}/>
        </Switch>
      </div>
      </Router>
</Provider>
    );




export default App;
