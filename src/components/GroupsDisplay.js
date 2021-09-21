import React from "react";
import { Link } from "react-router-dom";

const GroupsDisplay = ({ group, i }) => {
    return(
        <Link to={`/group/${group.ref['@ref'].id}`} style={{color: "inherit", textDecoration:"none"}}>
            <div className="card-small" key={i}>
                <div className="left">
                    <img src={group.data.bannerImg} alt="group emblem"/>
                    <h3>{group.data.groupName}</h3>
                </div>
                <div className="right">
                    <h4>{group.data.gameInfo}</h4>
                    {/* <h5>{group.data.gm}</h5> */}
                </div>
            </div>
        </Link>
    )
}

export default GroupsDisplay