import React, { useState } from "react";

const GroupForm = ({ handleSubmit, submitLabel, initialGroup, match }) => {

    const [formData, setFormData] = useState(initialGroup)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        const id = match.params.id
        handleSubmit({formData: formData, id: id})
    }

    return (
        <form 
            onSubmit={handleSubmission} 
            style={{
                display: "flex", 
                flexDirection:"column",
                justifyContent: "space-around", 
                width: "80%", 
                height: "80vh",
                margin: "0 auto"
                }}
            className="group-form"
        >
            <label htmlFor="groupName">What is the name of your group?</label>
            <input
                type="text"
                id="groupName"
                name="groupName"
                onChange={handleChange}
                value={formData.groupName}
            />
            <label htmlFor="gameInfo">What game or system are you using?</label>
            <input
                type="text"
                id="gameInfo"
                name="gameInfo"
                onChange={handleChange}
                value={formData.gameInfo}
            />
            <label htmlFor="groupInfo">Tell us more about the group! (Things like setting, story hook, or even schedule.)</label>
            <textarea
                type="text"
                id="groupInfo"
                name="groupInfo"
                onChange={handleChange}
                rows="5"
                style={{resize: "vertical", fontFamily: "inherit"}}
                value={formData.groupInfo}
            />
            <label htmlFor="gm">Who's running the game?</label>
            <input
                type="text"
                id="gm"
                name="gm"
                onChange={handleChange}
                value={formData.gm}
            />
            <label htmlFor="players">Who are the players?</label>
            <input
                type="text"
                id="players"
                name="players"
                onChange={handleChange}
                value={formData.players}
            />
            <label htmlFor="bannerImg">Add an image link for a banner.</label>
            <input
                type="text"
                id="bannerImg"
                name="bannerImg"
                onChange={handleChange}
                value={formData.bannerImg}
            />
            <input 
                type="submit"
                value={submitLabel}
            />
        </form>
    )
}

export default GroupForm