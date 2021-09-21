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

        console.log('PRE groupInfo: ', data.group)
        console.log('PRE groupMembers: ', data.members)

        setGroupInfo(data.group.data)
        setGroupMembers(data.members)
    }

    const joinGroup = async (role) => {
        const bundle = {
            userAuth,
            id: match.params.id,
            role: role
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

    const isUserActive = (role) => {
        if (groupMembers.filter(m => m.role === role && m.ref['@ref'].id === userAuth.userRef).length > 0){
            return true
        } else {
            return false
        }
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

        console.log('groupMembers: ', groupMembers)
        console.log('groupInfo: ', groupInfo)

        return (
            <div className="Group">
                <Header label={groupInfo.groupName} edit={true} match={match} location={location}/>
                <HeroImage profileImg={false} bannerImg={groupInfo.bannerImg} />
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <Participants gameRole="GM" individuals={groupMembers.filter(m => m.role === "GM")}/>
                    <Participants gameRole="PC" individuals={groupMembers.filter(m => m.role === "PC")}/>
                </div>
                <div className="group-info">
                <h3>Game Info</h3>
                <p>{groupInfo.gameInfo}</p>
                <h3>Group Info</h3>
                <p>{groupInfo.groupInfo}</p>
                </div>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    {!isUserActive("GM") &&
                        <button 
                            onClick={() => joinGroup("GM")} 
                            style={{margin: "0 auto"}}
                        >Join as a GM</button>
                    }
                    {!isUserActive("PC") &&
                        <button 
                            onClick={() => joinGroup("PC")} 
                            style={{margin: "0 auto"}}
                        >Join as a PC</button>
                    }   
                </div>
            </div>
        )
    }

    return groupInfo === null ? loading() : loaded()
}

export default Group