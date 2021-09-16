import React from "react";
import { useRecoilValue } from "recoil";
import { UserAuth } from "../atom";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateGroup from "../components/CreateGroup";

const Home = (props) => {

    const {userRef, token} = useRecoilValue(UserAuth)

    return(
        <div className="Home">
            <Header label="Session 0" back={false}/>
                <div className="feed" style={{marginBottom: "auto", overflow: "scroll"}}>
                <CreateGroup />
                <h2>{userRef}</h2>
                <h2>{token}</h2>
                <Link to="/group/309919493558108225">
                    <button>To Group</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default Home