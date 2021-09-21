import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <form onSubmit={handleSubmission} className="onboarding-options">
            <label htmlFor="email">email </label>
            <input 
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required={true}
            />
            <br/>
            <label htmlFor="password">password </label>
            <input 
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
            />
            <br />
            <input type="submit" value={submitLabel} className="button"/>
            <Link to="/signup">
                <p>(or create an account)</p>
            </Link>
        </form>
    )
}

export default LoginForm