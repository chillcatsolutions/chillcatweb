import { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Typewriter from 'typewriter-effect/dist/core';

import {
  Container,
  Start,
  FirstPipe,
  MainTitle,
  SecondaryTitle,
  HeroContainer,
  ContactContainer,
  CopyButton,
  IntroContainer,
  FooterContainer,
  HeaderContainerStyled
} from '../styles/style';
import BackgroundCanvas from '../components/BackgroundCanvas/BackgroundCanvas.component';
import FooterCanvas from '../components/FooterCanvas/FooterCanvas.component';
import { HeroReferencesType, animationLogo } from '../utils/animationLogo';


const Home: NextPage = () => {
  const startRef = useRef<HTMLDivElement>();
  const startTextRef = useRef<any>();
  const firstPipeRef = useRef<any>();
  const mainTitleRef = useRef<any>();
  const secondaryTitleRef = useRef<any>();
  const copyButtonRef = useRef<any>();
  const tl = useRef<gsap.core.Timeline>();

  const references = {
    startRef,
    startTextRef,
    firstPipeRef,
    mainTitleRef,
    secondaryTitleRef
  }

  useEffect(() => {
    // gsap.timeline().clear()
    animationLogo({
      ...references,
      copyButtonRef,
      tl
    })

    const typewriter = new Typewriter('#typewriter', {
      loop: false,
      delay: 60,
    });

    typewriter
    .pauseFor(4500)
    .typeString('Contact us at chillcatsolutions@gmail.com')
    .start();
  }, []);

  const Hero = () => (
    <HeroContainer>
      <BackgroundCanvas />
    </HeroContainer>  
  );

  const copyEmailHandler = () => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText('chlllcatsolutions@gmail.com').then(function() {
        console.log('Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: chillcatsolutions@gmail.com', err);
      });
    }
  };

  const ContactText = () => (
    <ContactContainer>
      <span id="typewriter">Welcome, you can contact us through: chillcatsolutions@gmail.com</span>
      <CopyButton ref={copyButtonRef} type="button" onClick={copyEmailHandler}>Copy Email</CopyButton>
    </ContactContainer>
  );

  const Intro = () => (
    <IntroContainer>
      Welcome to ChillCat Solutions
    </IntroContainer>
  );

  const Footer = () => {
    return (
      <FooterContainer>
        <FooterCanvas />
      </FooterContainer>
    );
  }

  return (
    <Container>
      <HeaderContainerStyled references={references as HeroReferencesType} />
      <Hero />
      <ContactText />
      <Intro />
      <Footer />
    </Container>
  )
}

export default Home
