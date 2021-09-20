import React, {useState,} from "react";
import Header from "../components/Header";

const EditProfile = ({ user, handleSubmit, match}) => {

    const [formData, setFormData] = useState(user)
    const [pcFormData, setPCFormData] = useState(user.profile_pc[0])
    const [gmFormData, setGMFormData] = useState(user.profile_gm[0])

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleChangePC = (event) => {
        if (event.target.name === "systemPC"){
            setPCFormData({...pcFormData, system: event.target.value})
        } else if (event.target.name === "lfgPC"){
            setPCFormData({...pcFormData, lfg: event.target.value === 'true' ? true : false})
        }
    }
    const handleChangeGM = (event) => {
        if (event.target.name === "systemGM"){
            setGMFormData({...gmFormData, system: event.target.value})
        } else if (event.target.name === "lfgGM"){
            setGMFormData({...gmFormData, lfg: event.target.value === 'true' ? true : false})
        }
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        const bundle = {
                ...formData,
                "profile_pc": [pcFormData],
                "profile_gm": [gmFormData]
        }
        handleSubmit(bundle)
    }

    return(
        <div className="EditProfile">
        <Header label="Edit Profile"/>
        <form 
            onSubmit={handleSubmission}
            className="edit-form"
        >
            <div className="section">
                <h3>General Profile Info</h3>
                <label htmlFor="userName">Your username: </label>
                <input 
                    type="text"
                    id="userName"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />
                <label htmlFor="profilePic">URL for your profile picture:</label>
                <input 
                    type="text"
                    id="profilePic"
                    name="img_profile"
                    onChange={handleChange}
                    value={formData.img_profile}
                />
                <label htmlFor="bannerPic">URL for your banner image:</label>
                <input 
                    type="text"
                    id="bannerPic"
                    name="img_banner"
                    onChange={handleChange}
                    value={formData.img_banner}
                />
            </div>
            <div className="section">
                <h3>PC (Player Character) Profile Info</h3>
                <label htmlFor="systemPC">What game/system are your currently playing/looking to play?</label>
                <input 
                    type="text"
                    id="systemPC"
                    name="systemPC"
                    onChange={handleChangePC}
                    value={pcFormData.system}
                />
                <p>Are you looking for a group to join?</p>
                <div>
                    <input 
                        type="radio" 
                        name="lfgPC" 
                        id="yesPC" 
                        value={true} 
                        checked={pcFormData.lfg === true}
                        onChange={handleChangePC}
                    />
                    <label htmlFor="yesPC">Yes</label>
                    <input 
                        type="radio" 
                        name="lfgPC" 
                        id="noPC" 
                        value={false} 
                        checked={pcFormData.lfg === false}
                        onChange={handleChangePC}/>
                    <label htmlFor="noPC">No</label>
                </div>
            </div>
            <div className="section">
                <h3>GM (Game Master) Profile Info</h3>
                <label htmlFor="systemGM">What game/system are your currently playing/looking to play?</label>
                <input 
                    type="text"
                    id="systemGM"
                    name="systemGM"
                    onChange={handleChangeGM}
                    value={gmFormData.system}
                />
                <p>Are you looking for a game to run?</p>
                <div>
                    <input 
                        type="radio" 
                        name="lfgGM" 
                        id="yesGM" 
                        value={true} 
                        checked={gmFormData.lfg === true}
                        onChange={handleChangeGM}
                    />
                    <label htmlFor="yesGM">Yes</label>
                    <input 
                        type="radio" 
                        name="lfgGM" 
                        id="noGM" 
                        value={false} 
                        checked={gmFormData.lfg === false}
                        onChange={handleChangeGM}
                    />
                    <label htmlFor="noGM">No</label>
                </div>
            </div>
            <input 
                type="submit"
                value="Save Changes"
                className="button"
            />
        </form>
        </div>
    )
}

export default EditProfile