import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import { getUserProfile, setLoggedIn } from './redux/actions';
import { useSelector } from 'react-redux';
import { AppState } from './redux/types';


function App() {
  const {isLoggedIn, isLoading} = useSelector((state:AppState)=> state.authReducer)
  useEffect(()=>{
    setLoggedIn(true)
  },[])

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home isLoggedIn={isLoggedIn} loading={isLoading} />
          </Route>
          <Route path='/login'>
            <Login login={isLoggedIn} isLoading={isLoading}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
