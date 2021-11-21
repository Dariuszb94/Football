import { useReducer } from "react";
import styled from "styled-components";
const initialState = { counter: 0 };

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

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

    default:
      throw new Error("Bad action");
  }
}
const Team = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
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
const Button = styled.button`
  border: none;
  outline: none;
  padding: 14px 16px 14px 16px !important;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  color: #4a4a4a;
  font-weight: 400;
  box-shadow: 0px 0px 2px rgb(55 71 79 / 20%), 0px 8px 12px rgb(0 0 0 / 10%);
`;
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
