import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';

function Comments(props) {
    return (
        <>
            {props.comments.map((comment)=>
               <div className="commentItem" key={comment.comment_id} >
               <div dangerouslySetInnerHTML={{__html:comment.body}}></div> 
               <NavLink to={`/users/${comment.owner.user_id}`} className="userName">{comment.owner.display_name}</NavLink>
               </div> 
            )}
        </>
    )
}

export default Comments;