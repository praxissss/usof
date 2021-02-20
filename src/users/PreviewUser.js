import React from 'react';

function PreviewUser(props) {
    let about = props.user.about_me;
    
    return (
        <div className="priviewUser">
            <p>{props.user.display_name}</p>
            <div className="badgesContainer">
                <div className="badgesItem"><div className="badge" id="gold"></div>{props.user.badge_counts.gold}</div>
                <div className="badgesItem"><div className="badge" id="silver"></div>{props.user.badge_counts.silver}</div>
                <div className="badgesItem"><div className="badge" id="bronze"></div>{props.user.badge_counts.bronze}</div>
            </div>
            <div className="aboutMe">
                <span dangerouslySetInnerHTML={{__html:about}}/>
            </div>
        </div>
    )
}

export default PreviewUser;