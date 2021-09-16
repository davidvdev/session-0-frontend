import React from "react";
import { FaSearch } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { GroupSearchTerm } from "../atom";

const GroupSearch = (props) => {

    const [search, setSearch] = useRecoilState(GroupSearchTerm)

    const handleChange = (event) => {
        setSearch({...search, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {

    }

    return(
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
    )
}

export default GroupSearch