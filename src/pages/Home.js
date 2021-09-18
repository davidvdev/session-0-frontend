import React,{ useEffect, useState} from "react";
import { useRecoilValue } from "recoil";
import { UserAuth } from "../atom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateGroup from "../components/CreateGroup";
import GroupsDisplay from "../components/GroupsDisplay";

const Home = (props) => {

    const userAuth = useRecoilValue(UserAuth)
    const [usersGroups, setUsersGroups] = useState([])

    const grabGroups = async () => {
        const response = await fetch(props.url + `home`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userAuth)
        })
        const data = await response.json()
        setUsersGroups(data)
    }

    useEffect(()=>{grabGroups()},[userAuth])

    return(
        <div className="Home">
            <Header label="Session 0" back={false} {...props}/>
                <div className="feed" style={{marginBottom: "auto", overflow: "scroll"}}>
                <CreateGroup />
                { usersGroups.length > 0 &&
                    <>
                    <h3>Your Groups</h3>
                    {usersGroups.map((group, i) => {
                        return (
                            <div key={i}>
                                <GroupsDisplay group={group} i={i}/>
                            </div>
                        )
                }
                    )}
                    </>
                }
            </div>
            <Footer />
        </div>
    )
}

export default Home