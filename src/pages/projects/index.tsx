import React from 'react';
import { MainContainer, ParraContainer, TitleContainer } from '../../styles/style';
import styled from 'styled-components';

const Ourprojects = styled.div`
  color: #ccc;
`;

const CardContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CardGrid = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(424px, 1fr));
  gap: 20px;
`;

const ProjectName = styled.h3`
  color: #333;
`;

const SectionTitle = styled.h4`
  color: #555;
  margin-top: 10px;
`;

const DescriptionContent = styled.p`
  font-size: .8em;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: #333;
`;

const Technologies = styled.span`
  color: #777;
`;

const Card = ({ name, description, technologies, url }) => {
  return (
    <CardContainer>
      <div>
        <ProjectName>{name}</ProjectName>
        <SectionTitle>Description</SectionTitle>
        <DescriptionContent>
          {description}
        </DescriptionContent>
        {url? (<ProjectLink href={url}>click para ver el projecto</ProjectLink>) : ("")}
        <SectionTitle>Technologies</SectionTitle>
        <Technologies>{technologies}</Technologies>
      </div>
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