import React from 'react';
import { useParams } from 'react-router-dom';
import Filter from '../../src/questions/Filter';
import Question from '../../src/questions/Question';


function OneTag() {
    let {tagName} = useParams();

    return (
        <TagInfo name={tagName}/>
    )
}


class TagInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterMethod: "",
        }
    }

    updateData = (value) => {
        this.setState({ filterMethod: value })
    }
    
    render() {
        return (
            <div className='mainContainer'>
                <div className='filters'>
                    <h1 className="filterH1">Filters</h1>
                    <Filter updateData={this.updateData} nameFilter="activity"/>
                    <Filter updateData={this.updateData} nameFilter="votes"/>
                    <Filter updateData={this.updateData} nameFilter="creation"/>
                </div>
                <div className='questionDiv'>
                    <h1>Questions tagged [ {this.props.name} ]</h1>
                    <Question filterMethod={this.state.filterMethod} tagged={this.props.name}/>
                </div> 
            </div>
        )
    }   
}

export default OneTag;