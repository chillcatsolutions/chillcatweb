import React from 'react'
import styled from 'styled-components'

import Logo from '../../../../public/logoChillCatSolutionsv2_small.png';
import IconRender from './IconRender';
import FooterLinkRender from './FooterLinkRender';

const FooterNavWrapper = styled.section`

`;

const FooterNavContent = styled.div`

`;
const FooterNavSocial = styled.div`

`;

function FooterNav() {
  return (
    <FooterNavWrapper>

      <FooterNavContent>
            
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
