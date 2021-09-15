import { atom } from 'recoil'

export const UserAuth = atom({
    key: "UserAuth",
    default: {
        token: "",
        userRef: ""
    }
})

export const AuthFormData = atom({
    key: "AuthFormData",
    default: {
        email: "",
        password: ""
    }
})