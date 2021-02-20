import { NavLink } from 'react-router-dom';
import React from 'react'


function Tags(props) {
    return (
        <>
            {props.tags.map((item, index) => <NavLink to={`/tags/${item}`} key={index} className="tagItem">{item}</NavLink>)}
        </>
    )
}

export default Tags;