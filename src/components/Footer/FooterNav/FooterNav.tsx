import React from 'react'
import styled from 'styled-components'

import Logo from '../../../../public/logoChillCatSolutionsv2.png';
import IconRender from './IconRender';
import FooterLinkRender from './FooterLinkRender';

const FooterNavWrapper = styled.section`
  position: absolute;
  z-index:1;
  display:flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap:25px;
  text-align: center;
  color: #aaaaaa;
  padding-bottom: 20px;
  width: 100%;
`;

const FooterLogoWrapper = styled.div`
  position: relative;
  user-select: none;
  max-width: 120px;
  background-color: #ffffff10;
  border-radius: 10px;
  padding: 0 10px;
  transition: all .4s;

  @media (max-width: 715px){
    max-width: 80px;
  }

  &:hover{
    background-color: #1c1c1c;
    &::after{content:""; width:calc(100% + 3px); height: calc(100% + 3px); background-color:#ffffff24; z-index:-1; position:absolute; border-radius:10px; top:0; left: 0;}
  }

  & a{
    display: flex;
    text-decoration: none;
    color: #14761D;
    align-items: center;
  }

  & img{
    width: 100%;
    height: 100%;
  }
`;

const FooterNavContent = styled.div`
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 5px solid #1c1c1c;
  border-radius: 5px;
  padding-bottom:25px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;

  @media (max-width: 715px) { 
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
  }
`;
const FooterNavSocial = styled.div`

`;

function FooterNav() {
  return (
    <FooterNavWrapper>
      <FooterLogoWrapper>
        <a href="#start">
          <img src={Logo.src} alt="" />
        </a>
      </FooterLogoWrapper>
      <FooterNavContent>
        <FooterLinkRender />
      </FooterNavContent>

      <FooterNavSocial>
        <IconRender/>
      </FooterNavSocial>
      <span>Chillcatsolutions Copyright by Chillcatsolutions</span>
    </FooterNavWrapper>
  );
}

export default FooterNav
