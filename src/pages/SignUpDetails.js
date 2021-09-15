import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpDetails = ({history}) => {
    const [userProfiles, setUserProfiles] = useState({
        player: false,
        gm: false
    })

    const [pcFormData, setPCFormData] = useState({
            system: "",
            lfg: true
    })
    const [gmFormData, setGMFormData] = useState({
            system: "",
            lfg: true
    })

    const handleChangeGM = (event) => {
        setGMFormData({...gmFormData, [event.target.name]: event.target.value})
    }
    const handleChangePC = (event) => {
        setPCFormData({...pcFormData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        history.push("/home")
    }

    const profileToggle = (profile) => {
        setUserProfiles({...userProfiles, [profile]: true})
    }

    return(
        <>
            <h1>Which side of the screen are you usually on?</h1>
            <button onClick={() => {profileToggle('player')}}>I'm a Player</button>
            {userProfiles.player === true &&
                <form onSubmit={handleSubmission}>
                    <h4>What game/system are you currently playing or looking to play?</h4>
                    <input
                        type="text"
                        name="system"
                        value={pcFormData.system}
                        onChange={handleChangePC}
                    />
                    <h4>Are you looking for a group to join?</h4>
                    <input type="radio" name="lfg" id="yes" value={true} onChange={handleChangePC}/>
                    <label htmlFor="yes">Yes</label>
                    <input type="radio" name="lfg" id="no" value={false} onChange={handleChangePC}/>
                    <label htmlFor="no">No</label>
                    { userProfiles.gm !== true &&
                        <>
                        <br />
                        <input type="submit" value="Save" />
                        </>
                    }
                </form>
            }
            <h3>or</h3>
            <button onClick={() => {profileToggle('gm')}}>I run the game</button>
            {userProfiles.gm === true &&
                <form onSubmit={handleSubmission}>
                    <h4>What game/system are you currently running or looking to run?</h4>
                    <input
                        type="text"
                        name="system"
                        value={pcFormData.system}
                        onChange={handleChangePC}
                    />
                    <h4>Are you looking for a group to run?</h4>
                    <input type="radio" name="lfg" id="yes" value={true} onChange={handleChangeGM}/>
                    <label htmlFor="yes">Yes</label>
                    <input type="radio" name="lfg" id="no" value={false} onChange={handleChangeGM}/>
                    <label htmlFor="no">No</label>
                    { userProfiles.gm === true &&
                        <>
                        <br />
                        <input type="submit" value="Save" />
                        </>
                    }
                </form>
            }
            <h4>or</h4>
            <Link to="/home">
                <h4>I'll set this up later...</h4>
            </Link>
            <h5>Are you both? No worries! All users have a Player profile and a Game Master profile, we just want to help you start off on the right foot.</h5>
        </>
    )
}

export default SignUpDetails