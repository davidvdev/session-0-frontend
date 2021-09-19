import React, {useState,} from "react";
import Header from "../components/Header";

const EditProfile = ({ user, handleSubmit, match}) => {

    const [formData, setFormData] = useState(user)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        const id = match.params.id
        handleSubmit({formData: formData, id: id})
    }

    console.log("USER: ", user)

    return(
        <>
        <Header label="Edit Profile"/>
        <form 
            onSubmit={handleSubmission}
            className="edit-form"
        >
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
            <h3>PC (Player Character) Profile Info</h3>
            <label htmlFor="systemPC">What game/system are your currently playing/looking to play?</label>
            <input 
                type="text"
                id="systemPC"
                name="profile_pc.system"
                onChange={handleChange}
                value={formData.profile_pc[0].system}
            />
            <h3>GM (Game Master) Profile Info</h3>
            <label htmlFor="systemGM">What game/system are your currently playing/looking to play?</label>
            <input 
                type="text"
                id="systemGM"
                name="profile_gm.system"
                onChange={handleChange}
                value={formData.profile_gm[0].system}
            />

        </form>
        </>
    )
}

export default EditProfile