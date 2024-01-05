import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap';
import LinkRenderer from './LinkRenderer';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import LinkHome from 'next/link';

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


type HeaderContainerProps = {
  references: HeroReferencesType
}
type Link = {
  name: string;
  url: string;
};
export type LinkRendererProps = {
  closeMenu(): void;
  render: Link[];
};

function HeaderContainer({ references }: HeaderContainerProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const closeMenu = () => {
    setIsChecked(false);
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
    { name: 'Mission', url: '/mission' },
    { name: 'Services', url: '/services' },
    { name: 'Contact Us', url: '/contact' },
  ];

  const NavWrapper = styled.nav`
    padding: 0 30px;

    @media (max-width: 916px) {
      display: ${isChecked ? 'block' : 'none'};
      position: absolute;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  `;

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 916) {
      setIsChecked(false);
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
        <LinkHome href="/">
          <LogoWrapper>
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
          </LogoWrapper>
        </LinkHome>

        <NavWrapper>
          <LinkRenderer closeMenu={closeMenu} render={links} />
        </NavWrapper>

        <Hamburguer onCheckboxChange={handleCheckboxChange}/>
      </HeaderWrapper>
    </>
  );
}

export default HeaderContainer;