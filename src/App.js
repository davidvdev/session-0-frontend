import React from 'react';
import './App.css';
import { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";

// components
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
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
                path="/signup"
                render={(routerprops) => <SignUp {...routerprops}/>}
            />
        </Switch>
    </div>
  );
}

export default App;
