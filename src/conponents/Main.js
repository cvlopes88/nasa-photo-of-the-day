import React, {useEffect, useState} from "react";
import axios from "axios";
import DayP from "./DayP"


 function Main () {
     const [dayPhoto, setDayPhoto] = useState([]);

useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`, {
    params: {}
    })
    .then(Response => {
        
      const datas = Response.data;
      setDayPhoto(dayPhoto);
      
console.log(datas)

    })

},[]);

return (
    <div>
        {dayPhoto.map(days => {
            return ( <DayP 
            key={days.date}
            date={days.date}
            title={days.title}
            description={days.explanation}
            img={days.url}
            />
            );
        })}
    </div>
)


















}

export default Main;