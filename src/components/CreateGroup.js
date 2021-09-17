import React from "react";
import { Link } from "react-router-dom";

const CreateGroup = (props) => {
    return(
        <div className="card-big">
            <h3>Haven't found a group yet? Make one!</h3>
            <Link to="/newgroup">
                <button>Create a New Group</button>
            </Link>
        </div>
    )
}

export default CreateGroup