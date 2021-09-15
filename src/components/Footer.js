import React from "react";
import { Link } from "react-router-dom";
import { TiUser, TiZoom } from 'react-icons/ti'
import { FaUser, FaSearch } from 'react-icons/fa'

const Footer = ({ label, back}) => {
    return(
        <footer>
            <Link to="/profile">
                <FaUser className="nav-button"/>
            </Link>
            <Link to="/search">
                <FaSearch className="nav-button"/>
            </Link>
        </footer>
    )
}

export default Footer