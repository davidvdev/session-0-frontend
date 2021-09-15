import React from 'react';
import './App.css';
// import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { UserAuth } from './atom';

// components
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
import SignUpDetails from './pages/SignUpDetails'
import Login from './pages/Login';
import Home from './pages/Home';

function App(props) {
// STATE & VARIABLES
const [userAuth, setUserAuth] = useRecoilState(UserAuth)
const url = "http://localhost:4500/"
// const url = "https://session-0-dv.herokuapp.com/"

// API CALLS

// user login
const login = async (formData) => {
    const response = await fetch(url + 'login', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    const data = await response.json()
    setUserAuth(data)
    props.history.push("/home")
}

// user signup/account creation
const signup = async (formData) => {
    const response = await fetch(url + 'signup', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    const data = await response.json()
    console.log('data: ', data)
    setUserAuth(data)
    props.history.push("/signup/details")
}

const updateProfile = async (update) => {

    const updates = {
        data: update,
        userAuth
    }
    console.log('sending: ', JSON.stringify(updates))

    await fetch(url + 'user', {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updates)
    })
    // const data = await response.json()
    props.history.push("/home")
}


return (
    <div className="App">
        <Switch>
            <Route 
                exact path="/"
                render={(routerprops) => <Welcome {...routerprops}/>} 
			/>
            <Route 
                path="/login"
                render={(routerprops) => <Login {...routerprops} login={login}/>}
            />
            <Route 
                exact path="/signup"
                render={(routerprops) => <SignUp {...routerprops} signup={signup}/>}
            />
            <Route 
                exact path="/signup/details"
                render={(routerprops) => <SignUpDetails {...routerprops} handleSubmit={updateProfile}/>}
            />
            <Route
                path="/home"
                render={(routerprops) => <Home {...routerprops}/>}
            />
        </Switch>
    </div>
  );
}

export default App;
