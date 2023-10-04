import React from "react";
import styled from "styled-components";

function App() {
  return (
    <div>
      <AppHeader>Template App Header</AppHeader>
      <BodyDiv>
        <h1>Testing Cypress Header</h1>
        <Button
          onClick={() => {
            console.log("Clicked");
          }}
        >
          Login
        </Button>
      </BodyDiv>
    </div>
  );
}

const AppHeader = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  color: black;
`;

const BodyDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 90vh;
`;

const Button = styled.button`
  background-color: #c4e0c4;
  text-align: center;
  top: 50%;
  padding: 10px;
  border-radius: 10%;
`;
export default App;
