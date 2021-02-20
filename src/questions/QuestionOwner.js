import React from 'react';
import { NavLink } from 'react-router-dom';

class QuestionOwner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showImg: false
        }
        this.preview = this.preview.bind(this);
    }

    preview() {
        this.setState(state => ({
            showImg: !state.showImg
        }));
    }

    render(){
        return (
            <div className='questionOwner'>
                asked {this.props.time} 
                <NavLink to={`/users/${this.props.id}`} onMouseOver={this.preview} onMouseOut={this.preview} className="userName">{this.props.name}</NavLink>
                {(this.state.showImg) ? <img className="ownerimg" src={(this.props.img)} alt="userimg"/> : null} 
                 <span>
                    <b>{(this.props.reputation > 9999) ? `${(this.props.reputation/1000).toFixed(1)}K` : this.props.reputation}</b>
                </span>
            </div>
        )
    }
    
}

export default QuestionOwner;