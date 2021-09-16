import React from "react";
import { Link } from "react-router-dom";
import { TiArrowLeftThick } from 'react-icons/ti'

const Header = ({ label = " ", back = true}) => {
    return(
        <header>
            {   back === true &&
                <Link to="/home">
                        <TiArrowLeftThick style={{marginRight: "auto"}} className="nav-button"/>
                </Link>
            }
            <h1 style={{margin: "0 auto"}}>{label}</h1>
        </header>
    )
}

export default Header