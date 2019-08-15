import React from "react";



const DayP = props => {
    return (
        <div className="day-photo" key={props.date}>
            <h2>Photo Of The Day: {props.title}</h2>
            <img className="dayImg" alt="pic of the day" src={props.photo}/>
            <p>{props.description}</p>
        </div>
    )
}

export default DayP;