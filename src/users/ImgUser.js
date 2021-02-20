import React from 'react';
import PreviewUser from './PreviewUser';

class imgUser extends React.Component {
    constructor (props){
        super(props);
       this.state = {
            showPreview: false
       }
       this.preview = this.preview.bind(this);
    }

    preview() {
        this.setState(state => ({
            showPreview: !state.showPreview
        }));
    }

    render () {
        return (
            <>
                <img src={this.props.user.profile_image} className="usersimgs" alt="imgUser" onMouseOver={this.preview} onMouseOut={this.preview}/>
                {(this.state.showPreview) ? <PreviewUser user={this.props.user}/> : null}
            </>
        )
    }
}

export default imgUser;