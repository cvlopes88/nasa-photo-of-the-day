import React, {useEffect, useState} from "react";
import axios from "axios";
import DayP from "./DayP";


 function Main () {
     const [dayPhoto, setDayPhoto] = useState('');

useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=bd1u5yNfk2SdcG6xjOaz6cVE0UKKVYgyQTOwN7Le`, {
    params: {}
    })
    .then(Response => {
        
      const datas = Response.data;
      setDayPhoto(datas);
      
console.log(datas)

})
.catch(err => {
    console.log(err.message);
})

},[])

if (!dayPhoto.url) return <h1>Loading...</h1>;

return (
    <div>
        
           <DayP date={dayPhoto.date} title={dayPhoto.title} description={dayPhoto.explanation} photo={dayPhoto.url} /> 
        

        
    </div>
);






// return (
//     <div>
//         {dayPhoto.map(days => {
//             return ( <DayP 
//             key={days.date}
//             date={days.date}
//             title={days.title}
//             description={days.explanation}
//             img={days.url}
//             />
//             );
//         })}
//     </div>



















}

export default Main;