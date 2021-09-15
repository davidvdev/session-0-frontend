import React from 'react';
import './App.css';
import { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";

// components
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
import SignUpDetails from './pages/SignUpDetails'
import Login from './pages/Login';

function App(props) {
return (
    <div className="App">
        <Switch>
            <Route 
                exact path="/"
                render={(routerprops) => <Welcome {...routerprops}/>} 
			/>
            <Route 
                path="/login"
                render={(routerprops) => <Login {...routerprops}/>}
            />
            <Route 
                exact path="/signup"
                render={(routerprops) => <SignUp {...routerprops}/>}
            />
            <Route 
                exact path="/signup/details"
                render={(routerprops) => <SignUpDetails {...routerprops}/>}
            />
            <Route
                path="/home"
                render={(routerprops) => <h1>HOME</h1>}
            />
        </Switch>
    </div>
  );
}

export default App;
