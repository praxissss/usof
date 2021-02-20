import React from 'react';

function OpenFilter(props) {
    if(!props.open) {
        return null;
    }

    return (
        <div className='ascDescFilters'>
            <button onClick={() => {props.updateData(`&sort=${props.value}&order=asc`)}}> &#8593;</button>
            <button onClick={() => {props.updateData(`&sort=${props.value}&order=desc`)}}> &#8595;</button>
        </div>  
    );   
}

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.handelToggleClick = this.handelToggleClick.bind(this);
    }

    updateData = (value) => {
        this.props.updateData(value);
    }

    handelToggleClick() {
        this.setState(state => ({
            open: !state.open
        }));
    }
    
    render() {
        return (
            <>

                <div className='itemFilters' onClick={this.handelToggleClick}>{this.props.nameFilter}</div>
                <OpenFilter open={this.state.open} value={this.props.nameFilter} updateData={this.updateData}/>
            </>
        )
    }
}

export default Filter;
