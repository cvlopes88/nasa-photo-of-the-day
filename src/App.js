import React from "react";
import "./App.css";
import Main from "./conponents/Main";
import DayP from "./conponents/DayP";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>

       <Main></Main>
       <DayP></DayP>
    </div>
  );
}

export default App;
