import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserInfo, UserAuth } from "../atom";

import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import ProfileGM from "../components/ProfileGM";
import ProfilePC from "../components/ProfilePC";

const Profile = (props) => {

    const [view, setView] = useState("PC")
    const [userInfo, setUserInfo] = useRecoilState(UserInfo)
    const userAuth = useRecoilValue(UserAuth)

    const grabProfileInfo = async () => {
        const response = await fetch(props.url + `user/` + props.userID, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userAuth)
        })
        const data = await response.json()
        setUserInfo(data)
    }
    useEffect(() => {grabProfileInfo()},[])

    const loading = () => {
        return(
        <div className="profile">
            <Header label="loading..." />
            <h1>Loading...</h1>
        </div>
        )
    }

    const loaded = () => {
        return (
            <div className="Profile">
                <Header label={userInfo.name} />
                <HeroImage 
                    profileImg={userInfo.img_profile}
                    bannerImg={userInfo.img_banner}   
                />
                <div className="profile-toggle" style={{display: "flex", justifyContent:"space-around"}}>
                    <div role="button" onClick={() => {setView("PC")}}>PC</div>
                    <div role="button" onClick={() => {setView("GM")}}>GM</div>
                </div>
                { userInfo !== null &&
                <>
                { view === "PC" && <ProfilePC info={userInfo.profile_pc}/> }
                { view === "GM" && <ProfileGM info={userInfo.profile_gm}/> }
                </>
                }
            </div>
        )
    }

    return userInfo === null ? loading() : loaded()
}

export default Profile