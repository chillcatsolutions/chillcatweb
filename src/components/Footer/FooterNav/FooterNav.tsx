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
  gap:25px;
`;

const FooterNavContent = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding-bottom:25px;
  justify-content: space-between;
  align-items:center;
  gap: 50px;
`;
const FooterNavSocial = styled.div`

`;

function FooterNav() {
  return (
    <FooterNavWrapper>

      <FooterNavContent>
            <span>Logo</span>
            <FooterLinkRender/>
      </FooterNavContent>

      <FooterNavSocial>

            <IconRender/>

      </FooterNavSocial>
      <span>@Copyright 2023 etc</span>
    </FooterNavWrapper>
  )
}

export default FooterNav
