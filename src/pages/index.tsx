import { useContext, useEffect } from "react";
import type { NextPage } from "next";
import Typewriter from 'typewriter-effect/dist/core';


import Hero from "../components/HomeComponents/Hero/Hero";
import {
  IntroContainer,
  MainContainer,
} from "../styles/style";
import { GlobalStoreContext } from "./_app";

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
      Welcome to ChillCat Solutions by Cesar Herrera
    </IntroContainer>
  );

  return (
    <>
      <Hero />
      <MainContainer>
        <Intro />
      </MainContainer>
    </>
  );
};

export default Home;
