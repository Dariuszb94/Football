import React from "react";
import Team from "./components/Team";
import styled from "styled-components";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [reset, resetSet] = useState(false);
  return (
    <Container>
      <Header />
      <Team />
      <Team />
    </Container>
  );
}

export default App;
const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,700&display=swap");
  font-family: "Lato", sans-serif;
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
`;
