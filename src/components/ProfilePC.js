import React from "react";

const ProfilePC = ({ info }) => {
    return (
        <div className="subprofile">
            { info.length >= 1 &&
                <>
                { info.map(entry => {
                    return (
                    <div>
                        <h3>{entry.system}</h3>
                        <p>{entry.lfg}</p>
                    </div>
                    )
                })}
                </>
            }
            { info.length < 1 &&
                <p>Fill out your profile to display your info!</p>
            }
        </div>
    )
}

export default ProfilePC