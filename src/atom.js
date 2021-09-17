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

export const GroupSearchTerm = atom({
    key: "GroupSearchTerm",
    default: {
        term: ""
    }
})

export const UserInfo = atom ({
    key: "UserInfo",
    default: null
})

export const GroupInfo = atom ({
    key: "GroupInfo",
    default: null
})

export const GroupMembers = atom ({
    key: "GroupMembers",
    default: null
})

export const AllGroups = atom ({
    key: "AllGroups",
    default: null
})