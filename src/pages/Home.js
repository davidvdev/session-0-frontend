import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateGroup from "../components/CreateGroup";

const Home = (props) => {

    return(
        <div className="Home">
            <Header label="Session 0" back={false}/>
                <div className="feed" style={{marginBottom: "auto", overflow: "scroll"}}>
                <CreateGroup />
            </div>
            <Footer />
        </div>
    )
}

export default Home