import React, { useState } from "react";

const LoginForm = ({ submitLabel, handleSubmit }) => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmission}>
            <label htmlFor="email">email </label>
            <input 
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required={true}
            />
            <br/>
            <label htmlFor="password">password </label>
            <input 
                type="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
            />
            <br />
            <input type="submit" value={submitLabel}/>
        </form>
    )
}

export default LoginForm