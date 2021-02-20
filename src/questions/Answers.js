import { NavLink } from 'react-router-dom';
import upVote from '../../src/up_vote.png';
import downVote from '../../src/down_vote.png';
import accepted from '../../src/accepted.png';
import Comments from './Comments';
import React from 'react'


function Answers(props) {
    return (
        <>
            {props.answers.map((answer)=>
               <div className="commentItem" key={answer.answer_id} >
               <div className="answerScore">
                    <img className="vote" src={upVote} alt="upVote"/>
                    <span>{answer.score}</span>  
                    <img className="vote" src={downVote} alt="downVote"/>                 
                    {(answer.is_accepted) ? <img className="accepted" src={accepted} alt="accepted"/> : null}                   
               </div>
               <div dangerouslySetInnerHTML={{__html:answer.body}}></div> 
               <div className="owner">
                   <p>answered {dataFormated(answer.creation_date*1000)}</p>
                   <NavLink to={`/users/${answer.owner.user_id}`} className="userName"><img alt="ownerImg" className="ownerImg" src={answer.owner.profile_image}/></NavLink>
                   <NavLink to={`/users/${answer.owner.user_id}`} className="userName">{answer.owner.display_name}</NavLink>
                   <p>{answer.owner.reputation}</p>
               </div>
               
                   {(answer.comment_count) > 0 ? <Comments comments={answer.comments}/> : null}
               

               </div> 
            )}
        </>
    )
}

export default Answers;

function dataFormated (date) {
    date = new Date(date)
    let day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes();

    if (month < 10) {
        month = `0${month}`;
    }if (day < 10) {
        day = `0${day}`;
    }if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (`${day}.${month}.${year} at ${hours}:${minutes}`);
}