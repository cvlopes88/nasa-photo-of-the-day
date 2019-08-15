import React from "react";
import { Card } from 'semantic-ui-react';


const DayP = props => {
    return (
        // <div className="day-photo" key={props.date}>
        //     <h2>Photo Of The Day: {props.title}</h2>
        //     <img className="dayImg" alt="pic of the day" src={props.photo}/>
        //     <p>{props.description}</p>
        // </div>
        <Card>
         <img src={props.photo} />   
        <Card.Content header={props.title} />
        <Card.Content description={props.description} />
      
      </Card>
    )
}
// const nasaCard = styled.Card`
// ${props => (props.type === 'card' ?`background: red;` : null)}

// `




export default DayP;