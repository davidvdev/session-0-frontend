import React, { useEffect } from 'react';
import './App.css';
// import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { UserAuth } from './atom';

// components & pages
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
import SignUpDetails from './pages/SignUpDetails'
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile'
import Search from './pages/Search'
import Group from './pages/Group'
import NewGroup from './pages/NewGroup';

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
    const bundle = {
        data: update,
        userAuth
    }

    await fetch(url + 'user', {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bundle)
    })
    props.history.push("/home")
}

const createNewGroup = async (group) => {
    const bundle = {
        data: group,
        userAuth
    }
    const response = await fetch(url + 'group', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bundle)
    })
    const data = await response.json()
    console.log('data: ', data)
    // props.history.push("/home")
}

useEffect(() => {
    setUserAuth(JSON.parse(window.sessionStorage.getItem("userAuth")))
},[])

useEffect(() => {
    window.sessionStorage.setItem("userAuth", JSON.stringify(userAuth))
},[userAuth])

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
            <Route
                path="/profile/:id"
                render={(routerprops) => <Profile {...routerprops} url={url} userID={userAuth.userRef}/>}
            />
            <Route
                path="/search"
                render={(routerprops) => <Search {...routerprops} url={url}/>}
            />
            <Route
                path="/group/:id"
                render={(routerprops) => <Group {...routerprops} url={url}/>}
            />
            <Route
                path="/newgroup"
                render={(routerprops) => <NewGroup {...routerprops} handleSubmit={createNewGroup}/>}
            />
        </Switch>
    </div>
  );
}

export default App;
