import React, { useContext, useEffect, useState } from 'react'
import { gsap } from 'gsap';
import LinkRenderer from './LinkRenderer';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import {
  Start,
  FirstPipe,
  MainTitle,
  SecondaryTitle,
  HeaderWrapper,
  LogoWrapper
} from '../../styles/style';  
import { HeroReferencesType } from '../../utils/animationLogo';
import Hamburguer from './Hamburguer';
import { GlobalStoreContext } from '../../pages/_app';


type HeaderContainerProps = {
  references: HeroReferencesType
}
type Link = {
  name: string;
  url: string;
};
export type LinkRendererProps = {
  render: Link[];
};

function HeaderContainer({ references }: HeaderContainerProps) {
  // const [isChecked, setIsChecked] = useState(false);

  const { isMenuOpen, toggleMenu } = useContext(GlobalStoreContext);

  const handleCheckboxChange = () => {
    // setIsChecked(!isChecked);
    toggleMenu();
  };

  const closeMenu = () => {
    toggleMenu(false);
  };

  const {
    startRef,
    startTextRef,
    firstPipeRef,
    mainTitleRef,
    secondaryTitleRef,
  } = references;

  const onEnter = (e: MouseEvent) => {
    gsap.to(e.currentTarget, { backgroundColor: 'rgb(50, 6, 3, 0.8)' });
  };

  const onLeave = (e: MouseEvent) => {
    gsap.to(e.currentTarget, { backgroundColor: 'rgba(30,30,30,0.66)' });
  };

  const links: Link[] = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Services', url: '/services' },
    { name: 'Mission', url: '/mission' },
    { name: 'Contact Us', url: '/contact' }
  ];

  const NavWrapper = styled.nav`
    max-width: 700px;
    padding: 0 30px;
    display: ${isMenuOpen ? 'block' : 'none'};

    @media (max-width: 916px) {
      display: ${isMenuOpen ? 'block' : 'none'};
      position: absolute;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  `;

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 916) {
      // setIsChecked(false);
      toggleMenu(false);
    }
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  window.addEventListener('resize', handleResize);

  const links = document.querySelectorAll('StyledLink');
  links.forEach(link => link.addEventListener('click', handleLinkClick));

  return () => {
    window.removeEventListener('resize', handleResize);

    links.forEach(link => link.removeEventListener('click', handleLinkClick));
  };
}, []);

  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <>
      <HeaderWrapper id="start" {...(isHome ? {} : { style: { position: 'relative' } })}>
        <LogoWrapper>
          <a href="/">
            <Start ref={startRef} onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <span ref={startTextRef}>
                <img
                  src="/logoChillCatSolutionsv2.png"
                  alt="logo"
                  height="100px"
                  width="80px"
                />
              </span>
            </Start>
            <FirstPipe ref={firstPipeRef} />
            <MainTitle ref={mainTitleRef}>ChillCat</MainTitle>
            <SecondaryTitle ref={secondaryTitleRef}>Solutions</SecondaryTitle>
          </a>
        </LogoWrapper>

        <NavWrapper>
          <LinkRenderer render={links}/>
        </NavWrapper>

        <Hamburguer onCheckboxChange={handleCheckboxChange}/>
      </HeaderWrapper>
    </>
  );
}

export default HeaderContainer;