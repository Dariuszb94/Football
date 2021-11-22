import { FC, useEffect, useReducer } from "react";
import styled from "styled-components";
import { Button } from "../ui/button";
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
}
const Team: FC<ITeam> = ({ reset }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  useEffect(() => {
    dispatch({ type: "reset" });
  }, [reset]);
  return (
    <Dashboard>
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
  margin: 0 40px;
`;
const Score = styled.span`
  font-size: x-large;
  margin: 20px 0;
`;
