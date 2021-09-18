import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { GroupInfo, UserAuth, GroupMembers } from "../atom";

import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Participants from "../components/Participants";

const Group = ({ location, match, url }) => {

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
        setGroupInfo(data.group.data)
        setGroupMembers(data.members.data)
    }

    const joinGroup = async () => {
        const bundle = {
            userAuth,
            id: match.params.id,
        }
        await fetch(url + `joingroup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bundle)
        })

        grabGroupInfo()
    }

    useEffect(() => {grabGroupInfo()},[])

    const loading = () => {
        return(
        <div className="profile">
            <Header label="loading..." edit={true} match={match} location={location}/>
            <h1>Loading...</h1>
        </div>
        )
    }

    const loaded = () => {
        return (
            <div className="Group">
                <Header label={groupInfo.groupName} edit={true} match={match} location={location}/>
                <HeroImage profileImg={false} bannerImg={groupInfo.bannerImg} />
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <Participants gameRole="GM" individuals={[groupMembers[0]]}/>
                    <Participants gameRole="PC" individuals={groupMembers}/>
                </div>
                <div className="group-info">
                <h3>Game Info</h3>
                <p>{groupInfo.gameInfo}</p>
                <h3>Group Info</h3>
                <p>{groupInfo.groupInfo}</p>
                </div>
                <button onClick={joinGroup} style={{margin: "0 auto"}}>Join as a PC</button>
            </div>
        )
    }

    return groupInfo === null ? loading() : loaded()
}

export default Group