import React from 'react'
import { FooterContainer } from '../../styles/style'
import FooterCanvas from './FooterCanvas.component'
import FooterNav from './FooterNav/FooterNav'

function Footer() {
  return (
      <FooterContainer>
        
        <FooterNav/>
        <FooterCanvas />

      </FooterContainer>
  )
}

export default Footer
