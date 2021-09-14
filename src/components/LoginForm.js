import React, { useState } from "react";

const LoginForm = ({ submitLabel }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        // make fetch to backend for user auth
        // store credentials in recoil
    }

    return (
        <form>
            <label htmlFor="email">email </label>
            <input 
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required="true"
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