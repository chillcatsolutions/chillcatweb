import { useContext, useEffect } from "react";
import type { NextPage } from "next";
import Typewriter from 'typewriter-effect/dist/core';


import Hero from "../components/HomeComponents/Hero/Hero";
import {
  IntroContainer,
  IntroContentContainer,
  MainContainer,
} from "../styles/style";
import { GlobalStoreContext } from "./_app";
import styled from "styled-components";

export const StyledLink = styled.a<React.AnchorHTMLAttributes<HTMLAnchorElement>>`
  color: #d7dc05;
  text-decoration: none;
  transition: all .3s;
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding: 5px;

  &:hover{
    color: #14761D;
  }

  @media (max-width: 1366px){
    font-size: .8em;
  }

  @media (max-width: 916px){
    &:hover{
        border-bottom: 2px solid #fff;
        border-radius: 10px;
        border-bottom: 2px solid #14761D;
    }
  }
`;

const Home: NextPage = () => {

  const { toggleMenu } = useContext(GlobalStoreContext);

  useEffect(() => {
    toggleMenu(false);
    const typewriter = new Typewriter('#typewriter', {
      loop: false,
      delay: 45,
    });

    typewriter
    .pauseFor(2500)
    .typeString("let's connect contact@chillcatsolutions.com")
    .start();

  }, []);


  const Intro = () => (
    <IntroContainer>
      Welcome to ChillCat Solutions
    </IntroContainer>
  );

  const Content = () => (
    <IntroContentContainer>
      Art + Code is my goal.
    </IntroContentContainer>
  )

  const Credits = () => (
    <IntroContentContainer>
      by <StyledLink href={"https://www.linkedin.com/in/cesar-herrera-37514243/"} target="_blank" rel="noopener noreferrer">
          Cesar Herrera
      </StyledLink>
    </IntroContentContainer>
  )

  return (
    <>
      <Hero />
      <MainContainer>
        <Intro />
        <Content />
        <Credits />
      </MainContainer>
    </>
  );
};

export default Home;
