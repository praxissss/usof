import React from 'react';
import * as axios from 'axios';
import TagWiki from './TagWiki';
import { NavLink } from 'react-router-dom';


class GetTags extends React.Component {
    constructor (props){
        super(props);
       this.state = {
            filterMethod: this.props.filterMethod,    
            resultApi: null,
       }
    }

    componentDidMount() {
        this.getQuestion(); 
    }

    componentDidUpdate(prevProps) {
        if(this.props.filterMethod !== prevProps.filterMethod) {
            this.getQuestion();
        }
    }

    getQuestion() {
        axios.get(`https://api.stackexchange.com/2.2/tags?&site=stackoverflow&key=${process.env.REACT_APP_KEY}${this.props.filterMethod}`)
        .then(response => {
            this.setState({
                resultApi: response.data.items});
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
                {this.state.resultApi.map((tag) =>  
                    <div  key={tag.name} className='tagDiv'>
                      <NavLink to={`/tags/${tag.name}`} className="tagItem">{tag.name}</NavLink>
                      <TagWiki name={tag.name}/>
                      <div className="tagCount">{tag.count} questions</div>
                    </div> 
                )}    
            </>
        )
    }
}

export default GetTags;
