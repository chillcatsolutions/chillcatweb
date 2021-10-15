import { RefObject, useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import type { NextPage } from 'next';
import { gsap } from 'gsap';

import BackgroundCanvas from '../components/BackgroundCanvas/BackgroundCanvas.component';

interface IStart {
  ref?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
}

const Container = styled.div`
  font-size:26px;
`;

const Start = styled.div<IStart>`
  font-size: 26px;
  margin-left: 20px;
  margin-top: 20px;
  background-color: rgba(30,30,30,0.66);
  border-radius: 15px;
  width: 100px;
  height: 100px;

  span {
    position: relative;
    display: block;
    text-align: center;
  }
`;

const FirstPipe = styled.div`
  background-color: rgba(30,169,30,0.66);
  height: 4px;
  width: 500px;
  position: absolute;
  top: 77px;
  left: 120px;
  border-radius: 10px;
`;

const MainTitle = styled.h2`
  position: absolute;
  top: 25px;
  left: 140px;
  color: #aaaaaa;
`;

const SecondaryTitle = styled.h2`
  position: absolute;
  top: 142px;
  left: 140px;
  color: #aaaaaa;
`;

const Home: NextPage = () => {
  const startRef = useRef<HTMLDivElement>();
  const startTextRef = useRef<any>();
  const firstPipeRef = useRef<any>();
  const mainTitleRef = useRef<any>();
  const secondaryTitleRef = useRef<any>();
  const tl = useRef<gsap.core.Timeline>();

  const onEnter = (e: MouseEvent) => {
    gsap.to(e.currentTarget, { backgroundColor: "rgb(50, 6, 3, 0.8)" });
  };

  const onLeave = (e: MouseEvent) => {
    gsap.to(e.currentTarget, { backgroundColor: "rgba(30,30,30,0.66)" });
  };

  useEffect(() => {
    // gsap.timeline().clear()
    if(startRef.current
      && startTextRef.current
      && firstPipeRef.current
      && mainTitleRef.current
      && secondaryTitleRef.current) {
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
    }
  }, []);

  return (
    <Container>
      <BackgroundCanvas />
      <Start ref={startRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <span ref={startTextRef}>
  			  <Image src="/logoChillCatSolutionsv2.png" alt="logo" height="100px" width="80px" />
        </span>
      </Start>
      <FirstPipe ref={firstPipeRef} />
      <MainTitle ref={mainTitleRef}>ChillCat</MainTitle>
      <SecondaryTitle ref={secondaryTitleRef}>Solutions</SecondaryTitle>
    </Container>
  )
}

export default Home
