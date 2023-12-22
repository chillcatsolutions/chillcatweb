import { useEffect } from "react";
import type { NextPage } from "next";
import Typewriter from 'typewriter-effect/dist/core';


import Hero from "../components/HomeComponents/Hero/Hero";
import {
  IntroContainer,
  MainContainer,
} from "../styles/style";

const Home: NextPage = () => {

  useEffect(() => {

    const typewriter = new Typewriter('#typewriter', {
      loop: false,
      delay: 45,
    });

    typewriter
    .pauseFor(2500)
    .typeString('Contact us at contact@chillcatsolutions.com')
    .start();

  }, []);


  const Intro = () => (
    <IntroContainer>Welcome to ChillCat Solutions</IntroContainer>
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
