import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { MainContainer, ParraContainer, TitleContainer } from '../../styles/style';
import BckMission from '../../../public/BckMission.jpg';
import { GlobalStoreContext } from '../_app';




/*mission*/
const Mission = styled.section`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 100px;
  justify-content: space-between;
  color: #ccc;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${BckMission.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  @media (max-width: 916px) {
    flex-direction: column;
    padding: 25px;
  }
`;


/*end of mission*/

/*vision*/
const Vision = styled.section`
  display: flex;
  flex-direction: column;
  color: #ccc;
  width: 100%;
  border-radius: 20px;
  @media (max-width: 916px) {
    flex-direction: column;
    padding: 25px;
  }
`;
/*vision*/
  
/*Objetives*/
const Objetives = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ccc;
  color: #000;
  width: 100%;
  border-radius: 20px;
  @media (max-width: 916px) {
  flex-direction: column;
  padding: 25px;
}
`;
/*Objetives*/
function Index() {

  const { toggleMenu } = useContext(GlobalStoreContext);

  useEffect(() => {
    toggleMenu(false);
   }, [])

  return (
    <MainContainer>
      <Mission>
        <TitleContainer>
          <h2>Mission: <span>create Art by using code</span></h2>
        </TitleContainer>

        <ParraContainer>
          <p>
            Always feeling the need to explore the possibilities of using code to create digital art as a visual interesting experience.
          </p>
        </ParraContainer>
      </Mission>

      <Vision>
        <TitleContainer> <h2>Vision: <span>Project on public spaces</span></h2> </TitleContainer>
        <ParraContainer>
          <p>
            The idea is to have several art pieces that can be transported to public spaces in order to interact with the people and the architecture of the environment where it is projected   
          </p>
        </ParraContainer>
      </Vision>

      {/* <Objetives>
      <TitleContainer> <h2>Objetives</h2> </TitleContainer>
        <ParraContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur consequatur ipsam, impedit blanditiis molestias eos, sint asperiores consectetur ullam labore mollitia veritatis. Consequuntur et officiis voluptates neque cupiditate cumque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus facere ducimus aut perspiciatis officiis voluptate eaque at distinctio libero ullam facilis illo neque laborum autem, saepe aperiam hic minima veritatis.
          </p>
        </ParraContainer>
      </Objetives> */}
    </MainContainer>
  )
}

export default Index
