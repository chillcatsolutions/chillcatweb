import React from 'react'
import styled from 'styled-components'
import { MainContainer, ParraContainer, TitleContainer } from '../../styles/style';
import BckMission from '../../../public/BckMission.jpg';




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
  @media (max-width: 916px) {
  flex-direction: column;
  padding: 25px;
}
`;
/*Objetives*/
function index() {
  return (
    <MainContainer>
      <Mission>
        <TitleContainer>
          <h2>Our Mission is to <span>design and built on proof</span></h2>
        </TitleContainer>

        <ParraContainer>
          <p>
            Our Company has the porpuse to bring Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum quasi minus enim. Sed ex illum impedit odit cum aut temporibus quo distinctio quod, officiis laborum odio eum qui fugiat? and more Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia delectus nesciunt, nam qui, ducimus labore aliquam, harum est earum ab sapiente impedit laborum placeat facere. Corrupti nisi repudiandae sequi. Quod!
          </p>
        </ParraContainer>
      </Mission>

      <Vision>
        <TitleContainer> <h2>Our Vision</h2> </TitleContainer>
        <ParraContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur consequatur ipsam, impedit blanditiis molestias eos, sint asperiores consectetur ullam labore mollitia veritatis. Consequuntur et officiis voluptates neque cupiditate cumque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus facere ducimus aut perspiciatis officiis voluptate eaque at distinctio libero ullam facilis illo neque laborum autem, saepe aperiam hic minima veritatis.
          </p>
        </ParraContainer>
        <div>
          <img src="" alt="" />
        </div>
      </Vision>

      <Objetives>
      <TitleContainer> <h2>Objetives</h2> </TitleContainer>
        <ParraContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur consequatur ipsam, impedit blanditiis molestias eos, sint asperiores consectetur ullam labore mollitia veritatis. Consequuntur et officiis voluptates neque cupiditate cumque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus facere ducimus aut perspiciatis officiis voluptate eaque at distinctio libero ullam facilis illo neque laborum autem, saepe aperiam hic minima veritatis.
          </p>
        </ParraContainer>
        <div>
          <img src="" alt="" />
        </div>
      </Objetives>
    </MainContainer>
  )
}

export default index
