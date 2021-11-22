import Team from "./components/Team";
import styled from "styled-components";
import Header from "./components/Header";
import "./App.css";
import React, { useState } from "react";
import { Button } from "./ui/Button";
function App() {
  const [reset, resetSet] = useState(false);
  const [score1, setScoreTeam1] = useState(0);
  const [score2, setScoreTeam2] = useState(0);
  const [history, historySet] = useState<{ team1: number; team2: number }[]>(
    []
  );
  const getScoreTeam1 = (data: number) => {
    setScoreTeam1(data);
    const newSet = {
      team1: data,
      team2: score2,
    };
    if (score2 + data) historySet((oldFiles) => [...oldFiles, newSet]);
  };
  const getScoreTeam2 = (data: number) => {
    setScoreTeam2(data);
    const newSet = {
      team1: score1,
      team2: data,
    };
    if (data + score1) historySet((oldFiles) => [...oldFiles, newSet]);
  };
  return (
    <Container>
      <Header />
      <Team description="Koszulkowcy" reset={reset} getScore={getScoreTeam1} />
      <Team
        description="Bezkoszulkowcy"
        reset={reset}
        getScore={getScoreTeam2}
      />
      {score1 + score2 > 0 ? (
        <ResetContainer>
          <Button onClick={() => resetSet((prev) => !prev)}>RESET</Button>
        </ResetContainer>
      ) : null}
      <History>
        {history.map((set, index) => (
          <HistoryLi key={index}>
            {set.team1} : {set.team2}
          </HistoryLi>
        ))}
      </History>
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
const ResetContainer = styled.div`
  flex: 100%;
  display: flex;
  justify-content: center;
`;
const History = styled.ul`
  list-style: none;
  margin: 40px 0;
  padding: 0;
`;
const HistoryLi = styled.li``;
