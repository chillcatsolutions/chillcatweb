import { RefObject, useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import type { NextPage } from 'next';

interface IStart {
  ref?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
}

const Container = styled.div`
  font-size:26px;
`;

const Start = styled.div<IStart>`
  font-size: 26px;
  margin-left: 20px;
  margin-top: 20px;
  background-color: green;
  width: 100px;
  height: 100px;

  span {
    position: relative;
    display: block;
    text-align: center;
  }
`;

const FirstPipe = styled.div`
  background-color: green;
  height: 10px;
  width: 500px;
  position: absolute;
  top: 77px;
  left: 120px;
`;

const MainTitle = styled.h2`
  position: absolute;
  top: 25px;
  left: 140px;
  color: #aaaaaa;
`;

const SecondaryTitle = styled.h2`
  position: absolute;
  top: 150px;
  left: 140px;
  color: #aaaaaa;
`;

const Experimentation: NextPage = () => {
  return (
    <Container>
      Imagen
			<Image src="/logoChillCatSolutionsv2.png" alt="logo" height="100px" width="80px" />
    </Container>
  )
}

export default Experimentation;
