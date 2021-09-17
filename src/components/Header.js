import React from "react";
import { Link } from "react-router-dom";
import { TiArrowLeftThick } from 'react-icons/ti'
import { MdModeEdit } from 'react-icons/md'

const Header = ({ match, label = " ", back = true, edit = false }) => {
    return(
        <header>
            { back === true &&
                <Link to="/home">
                    <TiArrowLeftThick style={{marginRight: "auto"}} className="nav-button"/>
                </Link>
            }
            <h1 style={{margin: "0 auto"}}>{label}</h1>
            { edit === true &&
                <Link to={`/editgroup/${match.params.id}`}>
                    <MdModeEdit style={{marginLeft: "auto"}} className="nav-button"/>
                </Link>
            }
        </header>
    )
}

export default Header