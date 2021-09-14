import { atom } from 'recoil'

export const UserAuth = atom({
    key: "user",
    default: ""
})

export const AuthFormData = atom({
    key: "formData",
    default: {
        email: "",
        password: ""
    }
})