import React from 'react';
import * as axios from 'axios';

class TagWiki extends React.Component {
    constructor (props){
        super(props);
       this.state = {   
            resultApi: null
       }
    }

    componentDidMount() {
        let name = encodeURIComponent(this.props.name)
        axios.get(`https://api.stackexchange.com/2.2/tags/${name}/wikis?&site=stackoverflow&key=HFW32iJzXLrJwqyL5HF2fg((
            `)
        .then(response => {
            this.setState({
                resultApi: response.data.items
            });
        }) 
    }

    render() {
        if (this.state.resultApi === null) {
            return (
                <h3>Please wait...</h3>
            )
        }
        return (
            <>
                <div className="tagWiki">
                    {(this.state.resultApi[0].excerpt).match(/./g).length > 170 ? (this.state.resultApi[0].excerpt).substring(0, 170) + "..." : this.state.resultApi[0].excerpt}
                </div>
            </>
        )
    }
}

export default TagWiki;