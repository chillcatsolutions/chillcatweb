import React from 'react';
import { MainContainer, ParraContainer, TitleContainer } from '../../styles/style';
import styled from 'styled-components';
import BckMission from '../../../public/BckMission.jpg';
import Pai from '../../../public/radio.png';
import PixelArt from '../../../public/pixelart.png';
import Rainy from '../../../public/rainy.jpeg';

const Ourprojects = styled.div`
  color: #ccc;
`;

const CardContent = styled.div`
  opacity: 0;
  transition: opacity .5s;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardContainer = styled.div <{ $background?: string; }>` 
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url( ${(props) => props.$background} );
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transition: background 0.7s, opacity 0.7s;

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${(props) => props.$background});
    background-repeat: no-repeat;
    background-size: 120% 120%;
    cursor: default;
    outline: 2px solid rgba(30, 169, 30, 0.66);

    ${CardContent} {
      opacity: 1;
    }

  }
`;

const CardGrid = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #ffffff10;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  border-radius: 20px;

  @media (max-width: 451px){
    padding: 0;
    margin: 0;
  }
`;



const ProjectName = styled.h3`
  color: #ccc;
`;

const SectionTitle = styled.h4`
  color: #14761D;

`;

const DescriptionContent = styled.p`
  font-size: .7em;
  color: #ccc;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: #ccc;
  user-select: none;
  font-size: .8em;

  &:hover{
    color: #14761D;
  }
`;

type Card = {
  name: string,
  description: string,
  url: string,
  background?: string,
}

const CardGenerator = ({ name, description, url, background }: Card) => {
  return (
    <CardContainer $background={background}>
      <CardContent>
        <ProjectName>{name}</ProjectName>
        <SectionTitle>Description</SectionTitle>
        <DescriptionContent>
          {description}
        </DescriptionContent>
        {url? (<ProjectLink href={url}>Click to check the project</ProjectLink>) : ("")}
      </CardContent>

    </CardContainer>
  );
};

function Index() {
  const cardsContent = [
    {
      name: "Ramdon Pixel Art Generator",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab, iste itaque quos maiores molestiae nihil.",
      url: "http:cesart.chillcatsolutions.com",
      background: PixelArt.src
    },
    {
    name: "lorem Ipsum",
    description:
      "Lorem ipsum molestiae nihil,  mollitia sed qui dolore quam, consequatur ipsam aut rem id sapiente ratione modi",
    url: "http:lorem.com",
    background: Pai.src
  },
  {
    name: "lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab, iste itaque quos maiores molestiae nihil,  mollitia sed qui dolore quam, consequatur ipsam aut rem id sapiente ratione modi",
    url: "http:lorem.com",
    background: Rainy.src
  },
  {
    name: "lorem Ipsum",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab, iste itaque quos maiores molestiae nihil,  mollitia sed qui dolore quam, consequatur ipsam aut rem id sapiente ratione modi",
    url: "",
    background: BckMission.src
  },
  ];
  console.log(cardsContent[2].background);
  return (
    <MainContainer>

      <Ourprojects>
        <TitleContainer>
          <h2>Our Projects</h2>
        </TitleContainer>
        <ParraContainer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam
          laborum totam? Sint nihil ullam placeat rem. Error ut doloremque
          saepe, sed dolor vitae laborum, iusto, consectetur aperiam velit
          provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Cumque itaque magnam error at nemo! Aspernatur sed exercitationem
          soluta laboriosam, adipisci similique tempora, eaque cum, architecto
          fugit in eum tempore quidem?
        </ParraContainer>
      </Ourprojects>

      <CardGrid>
        {cardsContent.map((card, index) => (
          <CardGenerator key={index} {...card} />
        ))}
      </CardGrid>

    </MainContainer>
  );
}

export default Index;