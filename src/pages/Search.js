import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserAuth, AllGroups, GroupSearchTerm } from "../atom";

import Header from "../components/Header";
import GroupSearch from "../components/GroupSearch";
import CreateGroup from "../components/CreateGroup";
import GroupsDisplay from "../components/GroupsDisplay";

const Search = ({ url }) => {

    const search = useRecoilValue(GroupSearchTerm)
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
    setGroups(data)
    }

    const searchFunction = (group) => {
        const g = group.data
        const st = search.term.toLowerCase()
        return (
            g.groupName.toLowerCase().includes(st) || 
            g.gameInfo.toLowerCase().includes(st) || 
            g.gm.toLowerCase().includes(st)
            )
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
                    {groups.filter(group => searchFunction(group)).map((group,i) => {
                    return(
                        <div key={i}>
                            <GroupsDisplay group={group} i={i}/>
                        </div>
                    )
                }
                    )}
                    </>
                }
            </div>
        </div>
    )
}

export default Search