import React from "react";

const HeroImage = ({bannerImg, profileImg}) => {
    return(
        <div className="HeroImage" style={{display: "flex", alignItems:"center"}}>
            { profileImg !== false &&
            <img 
                style={{position: "absolute", margin: "auto",left:"0",right:"0", width: "150px", height: "150px", objectFit: "cover", borderRadius: "90px"}}
                src={profileImg}
                alt="profile" 
            />
            }
            <img
                style={{width: "100%", maxHeight: "200px", objectFit: "cover"}} 
                src={bannerImg} 
                alt="banner" 
            />
        </div>
    )
}

export default HeroImage