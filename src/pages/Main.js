import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  return (
    <MainContainer>
      <h1>Main Page</h1>
    </MainContainer>
  );
};

export default Main;
