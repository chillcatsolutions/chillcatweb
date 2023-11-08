import { useEffect } from "react";
import { useRouter } from 'next/router';
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
      delay: 60,
    });

    typewriter
    .pauseFor(4500)
    .typeString('Contact us at chillcatsolutions@gmail.com')
    .start();

  }, []);
  
  const router = useRouter();
  const isHome = router.pathname === "/";

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
