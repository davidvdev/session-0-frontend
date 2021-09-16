import React from "react";
import Header from "../components/Header";
import GroupSearch from "../components/GroupSearch";

const Search = (props) => {
    return (
        <div className="Search">
            <Header label="Find a Group"/>
            <GroupSearch />
            <div className="search-results">
                <h2>this is where cards of groups will appear</h2>
            </div>
        </div>
    )
}

export default Search