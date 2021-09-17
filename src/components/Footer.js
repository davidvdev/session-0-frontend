import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { FaUser, FaSearch } from 'react-icons/fa'
import { UserAuth } from "../atom";

const Footer = ({ label, back}) => {
    return(
        <footer>
            <Link to={`/profile/${useRecoilValue(UserAuth).userRef}`}>
                <FaUser className="nav-button"/>
            </Link>
            <Link to="/search">
                <FaSearch className="nav-button"/>
            </Link>
        </footer>
    )
}

export default Footer