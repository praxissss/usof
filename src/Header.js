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
    }
    render() {
        return (
            <header>
                <div className="label">
                        <span><NavLink to="/"><b>usof</b></NavLink></span>
                </div>
                <input type='search' placeholder='Search...'/>
                <nav>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/tags">Tags</NavLink></li> 
                </nav>
            </header>
        );
    }
    
}

export default Header;
