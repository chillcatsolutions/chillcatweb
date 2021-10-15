// import { useEffect } from 'react';
import styled from 'styled-components';
import type { NextPage } from 'next';

const Container = styled.div`
  font-size:26px;
`;

const Experimentation: NextPage = () => {
	// useEffect(() => {
	// 	if(window){
	// 		window.addEventListener('click', event => {
	// 			console.log(event.x, event.y);
	// 		});
	// 	}
	// }, [])
  return (
    <Container>
			<img src="/logoChillCatSolutionsv2.png" alt="logo" height="300px" width="240px" />
    </Container>
  )
}

export default Experimentation;
