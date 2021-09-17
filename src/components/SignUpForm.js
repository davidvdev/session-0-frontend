import React, { useState } from "react";

const SignUpForm = ({ submitLabel, history, handleSubmit }) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        passConfirm: ""
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
            <label htmlFor="name">name </label>
            <input 
                type="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
            />
            <br/>
            <label htmlFor="email">email </label>
            <input 
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
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
            <label htmlFor="password">confirm password </label>
            <input 
                type="password"
                name="passConfirm"
                onChange={handleChange}
                value={formData.passConfirm}
            />
            <br />
            { formData.password !== formData.passConfirm && formData.passConfirm !=="" &&
                <p style={{color: "red"}}>passwords do not match</p>
            }
            <input type="submit" value={submitLabel}/>
        </form>
    )
}

export default SignUpForm