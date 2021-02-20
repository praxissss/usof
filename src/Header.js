import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


let tokens = null;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true,
            disabled: true,
            token: null
        };

        // this.handleClick = this.handleClick.bind(this);
        // this.renderLogin = this.renderLogin.bind(this);
        // this.logOut = this.logOut.bind(this);

    }

    // handleClick() {
    //     console.log("Log in");

    //     window.SE.authenticate({
    //         success: async (data) => {
    //             console.log('I got access'); 
    //             tokens = data;
    //             tokens = encodeURIComponent(tokens.accessToken);
    //             let response = await fetch(`https://api.stackexchange.com/2.2/me?site=stackoverflow&key=qBt3pH)yY2*kx96ogUORkA((&access_token=${tokens}`);
    //             let user = await response.json();
                
    //             this.setState({
    //                 status: false,
    //                 profil: user.items[0],
    //                 token: tokens
    //             });
    //             this.renderLogin();
    //         },
    //         error: function() {  alert('Я не получил доступ :('); },
    //     }) 

    // }

    // logOut(){
    //     axios.get(`https://api.stackexchange.com/2.2/apps/${this.state.token}/de-authenticate`)
    //     .then(() => { this.setState({
    //         status: true});
    //         this.renderLogin();
    //     })
    //     console.log("log out")
    // }

    // renderLogin() {
    //     if (this.state.status === true) {
    //         return (
    //             <button id="log" disabled={this.state.disabled} onClick={this.handleClick}>Log in</button> 
    //         )
    //     }else {
    //         return (
    //             <>
    //                 <div className="profile">
    //                     <NavLink to={`/users/${this.state.profil.user_id}`}><img id='userImg' alt='profilPhoto' src={this.state.profil.profile_image}/></NavLink>
    //                     <span id="userLogin">{this.state.profil.display_name}</span>
    //                     <span id="userReputation"><b>Reputation:</b> {this.state.profil.reputation}</span>
    //                 </div>
    //                 <button id="log" onClick={this.logOut}>Log out</button>
    //             </>
    //         );
    //     }
    // }
    render() {
        return (
            <header>
                <div className="label">
                        <span><b>usof</b></span>
                </div>
                
                <input type='search' placeholder='Search...'/>
                <nav>
                    <li><NavLink to="/">Main</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/tags">Tags</NavLink></li> 
                </nav>
                {/* {this.renderLogin()} */}
            </header>
        );
    }
    
}

export default Header;
