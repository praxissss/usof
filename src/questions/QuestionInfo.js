import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Comments from './Comments';
import Answers from './Answers';
import upVote from '../../src/up_vote.png';
import downVote from '../../src/down_vote.png';

class QuestionInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resultApi: null
        }
    }
    

    componentDidMount() {
        console.log(process.env.REACT_APP_KEY)
        axios.get(`https://api.stackexchange.com/2.2/questions/${this.props.id}?order=desc&sort=activity&site=stackoverflow&filter=!LYA)NcjxVO1mgxq*)Lp_Eq&key=${process.env.REACT_APP_KEY}`)
        .then(response => {
            console.log(response.data)
            this.setState({
                resultApi: response.data.items[0]});
        });
    }

    render() {
        if (this.state.resultApi === null) {
            return (
                    <h1>Please, wait...</h1>            
            )
        }
        return (
            <div className="questionInfo">
               <h1>{this.state.resultApi.title}</h1>
               <div className="questionScore">
                    <img className="vote" src={upVote} alt="upVote"/>
                    <span className="scoreCount">{this.state.resultApi.score}</span>  
                    <img className="vote" src={downVote} alt="downVote"/>                                    
               </div>
               <div className="questionBody" dangerouslySetInnerHTML={{__html:this.state.resultApi.body}}></div>
               <div className="questionTags">{this.state.resultApi.tags.map((tag) => <NavLink to={`/tags/${tag}`} key={tag} className="tagItem">{tag}</NavLink>)}</div>
               <div className="owner">
                   <p>asked {dataFormated(this.state.resultApi.creation_date*1000)}</p>
                   <NavLink to={`/users/${this.state.resultApi.owner.user_id}`} className="userName"><img alt="ownerImg" className="ownerImg" src={this.state.resultApi.owner.profile_image}/></NavLink>
                   <NavLink to={`/users/${this.state.resultApi.owner.user_id}`} className="userName">{this.state.resultApi.owner.display_name}</NavLink>
                   <p>{this.state.resultApi.owner.reputation}</p>
               </div> 
               <div className="comments">
                    {(this.state.resultApi.comment_count > 0) ? <Comments comments={this.state.resultApi.comments}/> : <p className="emptyComments">Comments: {this.state.resultApi.comment_count}</p>}
               </div>
               <div className="answers">
                    <h2>{this.state.resultApi.answer_count}  {(this.state.resultApi.answer_count === 1) ? "Answer" : "Answers"}</h2>
                    {(this.state.resultApi.answer_count > 0) ? <Answers answers={this.state.resultApi.answers}/> : null}
               </div>
            </div>
        )
    }
}

export default QuestionInfo;

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