import styled from "styled-components";

export const TestComponent = () => {
  return (
    <div>
      <AppHeader>New Component Header</AppHeader>
    </div>
  );
};

const AppHeader = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  color: black;
`;
