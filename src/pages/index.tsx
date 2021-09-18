import styled from 'styled-components';
import type { NextPage } from 'next';

const Container = styled.div`
  font-size:26px;
`;

const Start = styled.div`
  font-size: 26px;
  margin-left: 20px;
  margin-top: 20px;
  background-color: green;
  width: 100px;
  height: 100px;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Start />
    </Container>
  )
}

export default Home
