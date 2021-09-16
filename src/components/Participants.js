import React from "react";

const Participants =({ gameRole, individuals }) => {
    return(
        <div className="Participants">
            <h3>{gameRole}</h3>
            <div>
                {individuals.map((ind, i) => <p key={i}>{ind}</p>)}
            </div>
        </div>
    )
}

export default Participants