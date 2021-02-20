import React from 'react';
import Filter from '../src/questions/Filter';
import GetUsers from '../src/users/GetUsers';


class Users extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterMethod: ""
        }
    }

    updateData = (value) => {
        this.setState({ filterMethod: value })
    }
    
    render() {
        return (
            <div className='mainUserContainer'>
                <div className='filters'>
                    <h1 className="filterH1">Filters</h1>
                    <Filter updateData={this.updateData} nameFilter="reputation"/>
                    <Filter updateData={this.updateData} nameFilter="creation"/>
                    <Filter updateData={this.updateData} nameFilter="name"/>
                </div>
                <div>
                    <h1>Users</h1>
                    <div className='usersDiv'> 
                        <GetUsers filterMethod={this.state.filterMethod}/>
                    </div>
                </div> 
            </div>
        )
    }   
}

export default Users;