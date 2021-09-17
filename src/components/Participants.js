import React from "react";

const Participants =({ gameRole, individuals }) => {
    return(
        <div className="Participants">
            <h3>{gameRole}</h3>
            <div>
                {individuals.map((ind, i) => {
                    return(
                        <div key={i} style={{display: "flex", flexDirection: "column"}}>
                            <img src={ind.img_profile} alt={ind.name}/>
                            <p style={{marginTop: "0"}}>{ind.name}</p>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Participants