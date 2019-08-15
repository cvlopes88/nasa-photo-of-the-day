import React from "react";
import "./App.scss";
import Main from "./conponents/Main";
import styled from 'styled-components';
import ButtonAnimated from "./conponents/ButtonAnimated";


const StyledButton = styled.button`
  
  background: ${props => props.primary ? "#61DAFB" : "#265765"};
  color: ${props => props.primary ? "#265765" : "#61DAFB"};

  font-size: 1em;
  width:680px
  
  padding: 0.25em 1em;
  border: 2px solid #61DAFB;
  border-radius: 3px;
  &:hover {
    background: #265765;
    color: #61DAFB;
  }
`;

const StyledView = styled.h1`
  background-color: #61DAFB;
  font-size: 80px
  width:680px;
`


function App() {
  return (
    <div className="App">
     <StyledView>Photo of The Day</StyledView>
      <StyledButton primary>StyledButton</StyledButton>
      <ButtonAnimated />
       <Main />
      
    </div>
  );
}

export default App;
