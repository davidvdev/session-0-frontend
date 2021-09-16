import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { GroupInfo, UserAuth } from "../atom";

import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Participants from "../components/Participants";

const Group = ({ url, match }) => {

    const [groupInfo, setGroupInfo] = useRecoilState(GroupInfo)
    const userAuth = useRecoilValue(UserAuth)

    const grabGroupInfo = async () => {
        const response = await fetch(url + `group/` + match.params.id, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userAuth)
        })
        const data = await response.json()
        setGroupInfo(data)
    }
    useEffect(() => {grabGroupInfo()},[])

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
            <div className="Group">
                <Header label={groupInfo.groupName} />
                <HeroImage profileImg={false} bannerImg={groupInfo.bannerImg} />
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <Participants gameRole="GM" individuals={[groupInfo.gm]}/>
                    <Participants gameRole="PC" individuals={[groupInfo.players]}/>
                </div>
                <div className="group-info">
                <h3>Game Info</h3>
                <p>{groupInfo.gameInfo}</p>
                <h3>Group Info</h3>
                <p>{groupInfo.groupInfo}</p>
                </div>
            </div>
        )
    }

    return groupInfo === null ? loading() : loaded()
}

export default Group