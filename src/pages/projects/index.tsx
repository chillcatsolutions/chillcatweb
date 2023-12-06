import React from 'react';
import { MainContainer, ParraContainer, TitleContainer } from '../../styles/style';
import styled from 'styled-components';

const Ourprojects = styled.div`
  color: #ccc;
`;

const CardContainer = styled.div`
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  outline: 2px solid rgba(30,169,30,0.66);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
`;

const CardGrid = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #ffffff10;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(424px, 1fr));
  gap: 20px;
  border-radius: 20px;
`;

const ProjectName = styled.h3`
  color: #ccc;
`;

const SectionTitle = styled.h4`
  color: #14761D;
  margin-top: 10px;
`;

const DescriptionContent = styled.p`
  font-size: .8em;
  color: #ccc;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: #ccc;
  user-select: none;

  &:hover{
    color: #14761D;
  }
`;


const Technologies = styled.span`
  color: #1ba729;
`;

const Card = ({ name, description, technologies, url }) => {
  return (
    <CardContainer>
      <ProjectName>{name}</ProjectName>
      <SectionTitle>Description</SectionTitle>
      <DescriptionContent>
        {description}
      </DescriptionContent>
      {url? (<ProjectLink href={url}>Click to check the project</ProjectLink>) : ("")}
      <SectionTitle>Technologies</SectionTitle>
      <Technologies>{technologies}</Technologies>
    </CardContainer>
  );
};

function Index() {

  const cardsContent = [
    {
      name: "Ramdon Pixel Art Generator",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab, iste itaque quos maiores molestiae nihil,  mollitia sed qui dolore quam, consequatur ipsam aut rem id sapiente ratione modi",
      url: "http:cesart.chillcatsolutions.com",
      technologies: "Javascript, html, css",
    },
  ];

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
          <Card key={index} {...card} />
        ))}
      </CardGrid>

    </MainContainer>
  );
}

export default Index;