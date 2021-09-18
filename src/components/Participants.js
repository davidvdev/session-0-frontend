import React from "react";
import { Link } from "react-router-dom";

const Participants =({ gameRole, individuals }) => {

    const loading = () => {
        return(
            <div className="Participants">
                <h3>{gameRole}</h3>
            </div>
        )
    }

    const loaded = () => {
        return(
            <div className="Participants">
                <h3>{gameRole}</h3>
                <div>
                    {individuals.map((ind, i) => {
                        return(
                            <div key={i} style={{display: "flex", flexDirection: "column"}}>
                                <Link to={`/profile/${ind.ref['@ref'].id}`} style={{color: "inherit", textDecoration:"none"}}>
                                <img src={ind.data.img_profile} alt={ind.data.name}/>
                                <p style={{marginTop: "0"}}>{ind.data.name}</p>
                                </Link>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        )
    }

    return individuals[0] === undefined ? loading() : loaded() 
}

export default Participants