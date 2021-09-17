import React from "react";

import Header from "../components/Header";
import GroupForm from "../components/GroupForm";

const FormPage = ({handleSubmit, label, initialGroup, match}) => {

    return (
    <>
        <Header label={label}/>
        <GroupForm 
            handleSubmit={handleSubmit} 
            initialGroup={initialGroup} 
            submitLabel={label}
            match={match}
        />
    </>
    )
}

export default FormPage