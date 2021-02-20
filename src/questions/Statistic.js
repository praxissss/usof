import React from 'react'

function Statistic(props) {   
    return (
        <div className={(props.value === "answers") ? (props.score > 0) ? "statistic answered" : 
        "statistic" : "statistic"} id={(props.answered) ? "checkAnswer" : null}>{props.score}<p>{props.value}</p></div>
    )
}

export default Statistic;