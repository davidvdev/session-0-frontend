import React from "react";
import { useRecoilValue } from "recoil";
import { UserAuth } from "../atom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = (props) => {

    const {userRef, token} = useRecoilValue(UserAuth)

    return(
        <div className="home">
            <Header label="Session 0" back={true}/>
            <h2>{userRef}</h2>
            <h2>{token}</h2>
            <Footer />
        </div>
    )
}

export default Home