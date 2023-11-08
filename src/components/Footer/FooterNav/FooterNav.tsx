import React from 'react'
import styled from 'styled-components'

import Logo from '../../../../public/logoChillCatSolutionsv2_small.png';
import IconRender from './IconRender';
import FooterLinkRender from './FooterLinkRender';

const FooterNavWrapper = styled.section`
  position: absolute;
  z-index:1;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap:25px;
  text-align: center;
  color: #aaaaaa;
`;

const FooterLogoWrapper = styled.div`

`;

const FooterNavContent = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding-bottom:25px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
`;
const FooterNavSocial = styled.div`

`;

function FooterNav() {
  return (
    <FooterNavWrapper>

      <FooterNavContent>
            <FooterLogoWrapper>
              <a href="/"><img src={Logo.src} alt="" /></a>
            </FooterLogoWrapper>
            <FooterLinkRender/>
      </FooterNavContent>

      <FooterNavSocial>

            <IconRender/>

      </FooterNavSocial>
      <span>Chillcatsolutions Copyright by Chillcatsolutions</span>
    </FooterNavWrapper>
  )
}

export default FooterNav
