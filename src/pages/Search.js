import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserAuth, AllGroups } from "../atom";
import { FaSearch } from "react-icons/fa";

import Header from "../components/Header";
import CreateGroup from "../components/CreateGroup";
import GroupsDisplay from "../components/GroupsDisplay";

const Search = ({ url }) => {

    const [search, setSearch] = useState({term: ""})
    const userAuth = useRecoilValue(UserAuth)
    const [groups, setGroups] = useRecoilState(AllGroups)

    const handleChange = (event) => {
        setSearch({...search, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        setSearch({term: ""})
    }

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

    console.log("groups: ", groups)

    const loading = () => {
        return (
            <div className="Search">
                <Header label="Find a Group"/>
            </div>
        )
    }

    const loaded = () => {
        return (
            <div className="Search">
                <Header label="Find a Group"/>
                <div className="GroupSearch">
                    <input 
                        type="text" 
                        name="term"
                        value={search.term}
                        onChange={handleChange}
                        style={{width: "60vw"}}
                    />
                    <FaSearch role="button" onClick={handleSubmission} style={{margin: "0 1em"}}/>
                </div>
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

    return groups !== null ? loaded() : loading()

}

export default Search