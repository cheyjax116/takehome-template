import styled, { css } from "styled-components";
import { useRecoilState } from "recoil";
import { usernameAtom, countAtom } from "./atoms";

function App() {
  // const [username, setUsername] = useRecoilState(usernameAtom);

  const [counter, setCounter] = useRecoilState(countAtom);

  return (
    <MainDiv>
      <AppHeader data-test="header">Template App Header</AppHeader>
      <BodyDiv>
        <Counter data-test="counter" $count={counter}>
          {" "}
          {counter}
        </Counter>
        <ButtonDiv>
          <Button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Increment
          </Button>
          <Button
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            Decrement
          </Button>
        </ButtonDiv>
        <Button
          style={{ marginTop: "30px" }}
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </Button>
      </BodyDiv>
    </MainDiv>
  );
}

const MainDiv = styled.div``;

const AppHeader = styled.div`
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
  color: black;
`;

const BodyDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  height: 90vh;
`;

const Button = styled.button`
  width: 100px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #2d6d83;
  margin: 0 1em;
  padding: 0.8em 1em;
  &:hover {
    background-color: #2d6d83;
    color: whitesmoke;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 15px;
`;

const Counter = styled.div<{ $count: number }>`
  font-size: 175px;
  margin-bottom: 120px;
  margin-top: -6%;
  color: ${({ $count }) => ($count < 0 ? css`red` : css`green`)};
`;
export default App;
