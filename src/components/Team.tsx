import React, { FC, useEffect, useReducer } from "react";
import styled from "styled-components";
import { Button } from "../ui/Button";
const initialState = { counter: 0 };

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "reset" };

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case "reset":
      return {
        ...state,
        counter: 0,
      };
    default:
      throw new Error("Bad action");
  }
}
interface ITeam {
  reset: boolean;
  description: string;
  getScore: (data: number) => void;
}
const Team: FC<ITeam> = ({ reset, description, getScore }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  useEffect(() => {
    dispatch({ type: "reset" });
  }, [reset]);
  useEffect(() => {
    getScore(state.counter);
  }, [state]);
  return (
    <Dashboard>
      <Header>{description}</Header>
      <Button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        +
      </Button>
      <Score>{state.counter}</Score>
      {state.counter > 0 && (
        <Button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          -
        </Button>
      )}
    </Dashboard>
  );
};

export default Team;

const Dashboard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    margin: 0 40px 40px 40px;
  }
  margin: 0 12px 40px 12px;
`;
const Score = styled.span`
  font-size: x-large;
  margin: 20px 0;
`;
const Header = styled.h2`
  font-size: 20px;
`;
