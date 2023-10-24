import { Container,HeaderContainer,Start,FirstPipe,MainTitle,SecondaryTitle,HeroContainer,ContactContainer,CopyButton,IntroContainer,FooterContainer } from '../styles/style';

import { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Typewriter from 'typewriter-effect/dist/core';
import { gsap } from 'gsap';
import BackgroundCanvas from '../components/BackgroundCanvas/BackgroundCanvas.component';
import FooterCanvas from '../components/FooterCanvas/FooterCanvas.component';


const Home: NextPage = () => {
  const startRef = useRef<HTMLDivElement>();
  const startTextRef = useRef<any>();
  const firstPipeRef = useRef<any>();
  const mainTitleRef = useRef<any>();
  const secondaryTitleRef = useRef<any>();
  const copyButtonRef = useRef<any>();
  const tl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    // gsap.timeline().clear()
    if(startRef.current
      && startTextRef.current
      && firstPipeRef.current
      && mainTitleRef.current
      && secondaryTitleRef.current
      && copyButtonRef.current) {
      tl.current = gsap.timeline()
      .fromTo(startRef.current, {
        y: -200,
        duration: 1,
        stagger: 0.2, 
      }, {
        y: -100,
        duration: 1,
        stagger: 0.2,
      })
      .to(startRef.current, {
        rotate: '+=20',
        duration: 0.4,
        stagger: 0.2, 
      })
      .to(startRef.current, {
        rotate: '-=40',
        duration: 0.4,
        stagger: 0.2, 
      })
      .to(startRef.current, {
        rotate: '+=20',
        duration: 0.5,
        stagger: 0.2, 
      })
      .to(startRef.current, {
        y: -90,
        duration: .5,
        stagger: 0.2, 
      })
      .to(startRef.current, {
        y: 10,
        rotate: '+=360',
        duration: .5,
        stagger: 0.2, 
      })
      .fromTo(startTextRef.current, {
        opacity: 0,
        duration: .5,
        stagger: 0.2, 
      }, {
        opacity: 1,
        duration: .5,
        stagger: 0.2,
      })
      .fromTo(firstPipeRef.current, {
        width: 0,
        duration: .3,
        stagger: 0.2, 
      }, {
        width: 500,
        duration: .3,
        stagger: 0.2,
      }).fromTo(mainTitleRef.current, {
        opacity: 0,
        duration: .5,
        stagger: 0.2, 
      }, {
        opacity: 1,
        duration: .8,
        stagger: 0.2,
      })
      .fromTo(secondaryTitleRef.current, {
        opacity: 0,
        duration: .5,
        stagger: 0.2, 
      }, {
        opacity: 1,
        duration: .8,
        stagger: 0.2,
      })
      .fromTo(copyButtonRef.current, {
        opacity: 0,
        duration: .5,
        stagger: 0.2, 
      }, {
        opacity: 1,
        duration: .8,
        stagger: 0.2,
      })
      .to(secondaryTitleRef.current, {
        y: 0,
        rotation: '-=20',
        duration: .5,
        stagger: 0.2, 
      })
      .to(secondaryTitleRef.current, {
        y: -60,
        rotation: '+=20',
        duration: .5,
        stagger: 0.2, 
      })
      .to(firstPipeRef.current, {
        width: 230,
        duration: .3,
        stagger: 0.2, 
      });
      const typewriter = new Typewriter('#typewriter', {
        loop: false,
        delay: 60,
      });

      typewriter
      .pauseFor(4500)
      .typeString('Contact us at chillcatsolutions@gmail.com')
      .start();
    }
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
      <HeaderContainer/>
      <Hero />
      <ContactText />
      <Intro />
      <Footer />
    </Container>
  )
}

export default Home
