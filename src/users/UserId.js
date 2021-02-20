import React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function UserId() {
    let {userID} = useParams();

    return (
        <UserInfo id={userID}/>
    )
}



class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            resultApi: null
        }
    }

    componentDidMount() {
        axios.get(`https://api.stackexchange.com/2.2/users/${this.props.id}?&site=stackoverflow&filter=!--1nZuvlSU9X&key=${process.env.REACT_APP_KEY}`)
        .then(response => {
            this.setState({
                resultApi: response.data.items
            });
        });
    }

    render() {
    
    if (this.state.resultApi === null) {
        return (
            <h1>Please wait...</h1>
        )
    }
    return (
        <>
            {this.state.resultApi.map((user) => 
            <div key={user.user_id} className='mainUser'>
                <h1 className="oneUserName">{user.display_name}</h1>
                <div className="userLocation">Location: {user.location}</div>
                <div className="imgAndBadges">
                    <img className='bigUserImg' src={user.profile_image} alt="imgUser"/>
                    <div className="badges">
                        <div className="badgesItem"><div className="badge" id="gold"></div>{user.badge_counts.gold}</div>
                        <div className="badgesItem"><div className="badge" id="silver"></div>{user.badge_counts.silver}</div>
                        <div className="badgesItem"><div className="badge" id="bronze"></div>{user.badge_counts.bronze}</div>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html:user.about_me}} className="aboutUser"></div>
                
            </div>)}
        </>
        )
    }
}

export default UserId;