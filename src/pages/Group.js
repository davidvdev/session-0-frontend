import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { GroupInfo, UserAuth, GroupMembers } from "../atom";

import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Participants from "../components/Participants";

const Group = ({ match, url }) => {

    const [groupInfo, setGroupInfo] = useRecoilState(GroupInfo)
    const [groupMembers, setGroupMembers] = useRecoilState(GroupMembers)
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
        console.log(data)
        setGroupInfo(data.group.data)
        setGroupMembers(data.members.data)
    }

    const joinGroup = async () => {
        const bundle = {
            userAuth,
            id: match.params.id,
        }
        const response = await fetch(url + `joingroup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bundle)
        })
        const data = await response.json()
        console.log('RES: ', data)
    }

    useEffect(() => {grabGroupInfo()},[])

    const loading = () => {
        return(
        <div className="profile">
            <Header label="loading..." edit={true} match={match}/>
            <h1>Loading...</h1>
        </div>
        )
    }

    const loaded = () => {
        return (
            <div className="Group">
                <Header label={groupInfo.groupName} edit={true} match={match} />
                <HeroImage profileImg={false} bannerImg={groupInfo.bannerImg} />
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <Participants gameRole="GM" individuals={[groupInfo.gm]}/>
                    <Participants gameRole="PC" individuals={groupMembers}/>
                    <button onClick={joinGroup}>JOIN</button>
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