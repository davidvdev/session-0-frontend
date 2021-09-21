import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpDetails = ({history, handleSubmit}) => {
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
        if (event.target.name === "systemGM"){
            setGMFormData({...gmFormData, system: event.target.value})
        } else if (event.target.name === "lfgGM"){
            setGMFormData({...gmFormData, lfg: event.target.value === 'true' ? true : false})
        }
    }
    const handleChangePC = (event) => {
        if (event.target.name === "systemPC"){
            setPCFormData({...pcFormData, system: event.target.value})
        } else if (event.target.name === "lfgPC"){
            setPCFormData({...pcFormData, lfg: event.target.value === 'true' ? true : false})
        }
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit({
            profile_pc: [pcFormData], 
            profile_gm: [gmFormData]
        })
    }

    const profileToggle = (profile) => {
        setUserProfiles({...userProfiles, [profile]: true})
    }

    return(
        <div className="SignUpDetails-back">
            <div className="SignUpDetails">
                <h1>Which side of the screen are you usually on?</h1>
                <button onClick={() => {profileToggle('player')}}>I'm a Player</button>
                {userProfiles.player === true &&
                    <form onSubmit={handleSubmission}>
                        <h4>What game/system are you currently playing or looking to play?</h4>
                        <input
                            type="text"
                            name="systemPC"
                            value={pcFormData.system}
                            onChange={handleChangePC}
                        />
                        <h4>Are you looking for a group to join?</h4>
                        <input 
                            type="radio" 
                            name="lfgPC" 
                            id="yesPC" 
                            value={true} 
                            onChange={handleChangePC}
                        />
                        <label htmlFor="yesPC">Yes</label>
                        <input 
                            type="radio" 
                            name="lfgPC" 
                            id="noPC" 
                            value={false} 
                            onChange={handleChangePC}
                        />
                        <label htmlFor="noPC">No</label>
                        { userProfiles.gm !== true &&
                            <>
                            <br />
                            <input type="submit" value="Save" className="button"/>
                            </>
                        }
                    </form>
                }
                <h3>and/or</h3>
                <button onClick={() => {profileToggle('gm')}}>I run the game</button>
                {userProfiles.gm === true &&
                    <form onSubmit={handleSubmission}>
                        <h4>What game/system are you currently running or looking to run?</h4>
                        <input
                            type="text"
                            name="systemGM"
                            value={gmFormData.system}
                            onChange={handleChangeGM}
                        />
                        <h4>Are you looking for a group to run?</h4>
                        <input 
                            type="radio" 
                            name="lfgGM" 
                            id="yesGM" 
                            value={true} 
                            onChange={handleChangeGM}
                        />
                        <label htmlFor="yesGM">Yes</label>
                        <input 
                            type="radio" 
                            name="lfgGM" 
                            id="noGM" 
                            value={false} 
                            onChange={handleChangeGM}
                        />
                        <label htmlFor="noGM">No</label>
                        { userProfiles.gm === true &&
                            <>
                            <br />
                            <input type="submit" value="Save" className="button"/>
                            </>
                        }
                    </form>
                }
                <h4>or</h4>
                <Link to="/home" onClick={handleSubmission}>
                    <h4>I'll set this up later...</h4>
                </Link>
                <h5>Are you both? No worries! All users have a Player profile and a Game Master profile, we just want to help you start off on the right foot.</h5>
            </div>
        </div>
    )
}

export default SignUpDetails