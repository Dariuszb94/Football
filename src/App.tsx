import Team from "./components/Team";
import styled from "styled-components";
import Header from "./components/Header";
import "./App.css";
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
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
`;
