import React from 'react';
import * as axios from 'axios';
import Title from './Title';
import Statistic from './Statistic';
import Tags from './Tags';
import QuestionOwner from './QuestionOwner';

let toDate = Math.round(new Date().getTime()/1000);
let fromDate = toDate - 43200;

class Question extends React.Component {
    constructor (props){
        super(props);
       this.state = {     
            resultApi: null
       }
    }

    componentDidMount() {
        this.getQuestion(); 
    }

    componentDidUpdate(prevProps) {
        if((this.props.filterMethod !== prevProps.filterMethod) || (this.props.tagged !== prevProps.tagged)) {
            this.getQuestion();
        }
    }

    getQuestion() {
        axios.get(`https://api.stackexchange.com/2.2/questions?pagesize=50&fromdate=${fromDate}&todate=${toDate}&tagged=${this.props.tagged}&site=stackoverflow&key=HFW32iJzXLrJwqyL5HF2fg((${this.props.filterMethod}`)
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
                {this.state.resultApi.map((item) =>  
                    <div  key={item.question_id} className='question'>
                        <Title title={item.title} id={item.question_id}/>
                        <div className='allStats'>
                            <Statistic score={item.score} value="votes"/>
                            <Statistic score={item.answer_count} answered={item.is_answered} value="answers"/>
                            <Statistic score={item.view_count} value="views"/>
                        </div>
                        <div className='tagsAndOwner'>
                            <Tags tags={item.tags}/>
                            <QuestionOwner name={item.owner.display_name} id={item.owner.user_id} img={item.owner.profile_image} reputation={item.owner.reputation} time={dataFormated(item.creation_date*1000)}/>
                        </div>
                    </div>
                )}
            </>
        )
    }
}

export default Question;

function dataFormated (date) {
    date = new Date(date)
    let day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes();

    if (month < 10) {
        month = `0${month}`;
    }if (day < 10) {
        day = `0${day}`;
    }if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (`${day}.${month}.${year} at ${hours}:${minutes}`);
}