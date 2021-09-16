import React from "react";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import Participants from "../components/Participants";

const Group = (props) => {
    return (
        <div className="Group">
            <Header label="Group Name" />
            <HeroImage profileImg={false} bannerImg="https://images.unsplash.com/photo-1605142859862-978be7eba909?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80" />
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <Participants gameRole="GM" individuals={["Kevin"]}/>
                <Participants gameRole="PC" individuals={["Adam", "Paul", "Schuyler"]}/>
            </div>
            <div className="group-info">
            <h3>Game Info</h3>
            <p>Some Meta Data about the Game and system.</p>
            <h3>Group Info</h3>
            <p>More detailed information about the group itself, schedule, and maybe current storylines/progress</p>
            </div>
        </div>
    )
}

export default Group