import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserAuth, AllGroups } from "../atom";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import GroupSearch from "../components/GroupSearch";
import CreateGroup from "../components/CreateGroup";

const Search = ({ url }) => {

    const userAuth = useRecoilValue(UserAuth)
    const [groups, setGroups] = useRecoilState(AllGroups)

    const fetchGroups = async() => {
        const response = await fetch(url + 'allgroups', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userAuth)
    })
    const data = await response.json()
    console.log(data)
    setGroups(data)
    }

    useEffect(()=> {fetchGroups()},[])

    return (
        <div className="Search">
            <Header label="Find a Group"/>
            <GroupSearch />
            { (groups === null || groups.length < 5) &&
                    <CreateGroup />
            }
            <div className="search-results">
                
                { groups !== null && groups.length > 0 &&
                    <>
                    {groups.map(group => {
                        return(
                            <Link to={`/group/${group.ref['@ref'].id}`}>
                                <div className="card-small" key={group.ref['@ref'].id}>
                                    <div className="left">
                                        <img src={group.data.bannerImg} alt="group emblem"/>
                                        <h3>{group.data.groupName}</h3>
                                    </div>
                                    <div className="right">
                                        <h4>{group.data.gameInfo}</h4>
                                        <h5>{group.data.gm}</h5>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                    </>
                }
            </div>
        </div>
    )
}

export default Search