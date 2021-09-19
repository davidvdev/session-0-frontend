import React from "react";
import { Link } from "react-router-dom";
import { TiArrowLeftThick } from 'react-icons/ti'
import { MdModeEdit } from 'react-icons/md'

const Header = ({location, match, label = " ", back = true, edit = false }) => {

    let pageType

    if(location !== undefined){
        pageType = location.pathname.split("/")[1]
    }
    return(
        <header>
            { back === true &&
                <Link to="/home">
                    <TiArrowLeftThick style={{marginRight: "auto"}} className="nav-button"/>
                </Link>
            }
            <h1 style={{margin: "0 auto"}}>{label}</h1>
            { edit === true && pageType === "group" &&
                <Link to={`/editgroup/${match.params.id}`}>
                    <MdModeEdit style={{marginLeft: "auto"}} className="nav-button"/>
                </Link>
            }
            { edit === true && pageType === "profile" &&
                <Link to={`/editprofile/${match.params.id}`}>
                    <MdModeEdit style={{marginLeft: "auto"}} className="nav-button"/>
                </Link>
            }
        </header>
    )
}

export default Header