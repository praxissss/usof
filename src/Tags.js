import React from 'react';
import Filter from '../src/questions/Filter';
import GetTags from './tags/GetTags';



class Tags extends React.Component {
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
            <div className='mainTagContainer'>
                <div className='filters'>
                    <h1 className="filterH1">Filters</h1>
                    <Filter updateData={this.updateData} nameFilter="popular"/>
                    <Filter updateData={this.updateData} nameFilter="activity"/>
                    <Filter updateData={this.updateData} nameFilter="name"/>
                </div>
                <div>
                    <h1>Tags</h1>
                <div className='tagsContainer'> 
                    <GetTags filterMethod={this.state.filterMethod}/>
                </div>
                </div> 
            </div>
        )
    }   
}

export default Tags;