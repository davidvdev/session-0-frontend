import React, { useState } from "react";

const GroupForm = ({ handleSubmit, submitLabel, initialGroup, match }) => {

    const [formData, setFormData] = useState(initialGroup)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        const id = match.params.id
        console.log("Bundle: ", {formData: formData, id: id})
        handleSubmit({formData: formData, id: id})
    }

    return (
        <form 
            onSubmit={handleSubmission} 
            className="edit-form"
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
            {/* <label htmlFor="gm">Who's running the game?</label>
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
            /> */}
            <label htmlFor="bannerImg">Add an image link for a banner.</label>
            <input
                type="text"
                id="bannerImg"
                name="bannerImg"
                onChange={handleChange}
                value={formData.bannerImg}
            />
            <br />
            <input 
                type="submit"
                value={submitLabel}
                className="button"
            />
        </form>
    )
}

export default GroupForm