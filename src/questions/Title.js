import { NavLink } from "react-router-dom";
import React from 'react'

function Title(props) {  
    return (
        <NavLink to={`/questions/${props.id}`} className="title">{props.title}</NavLink>
    )
}

export default Title;