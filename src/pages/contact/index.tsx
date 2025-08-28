import React, { useContext, useEffect } from 'react'
import { GlobalStoreContext } from '../_app';
import { StyledLink } from '..';
import styled from 'styled-components';

export const StyledSection = styled.section`
  color: #d9d9d9;
  padding: 20px;
`;

export const StyledMain = styled.main`
  margin-top: 20px;
`;

const Index = () => {

  const { toggleMenu } = useContext(GlobalStoreContext);

  useEffect(() => {
    toggleMenu(false);
   }, [])
   
  return (
    <StyledMain>
      <StyledSection>
        <h4>Contact</h4>
        <span>Feel free to reach out through the contact channels below:</span>
      </StyledSection>
      <ul>
        <li>
          <StyledSection>
            Currently located at Spain
          </StyledSection>
        </li>
        <li>
          <StyledSection>
            Email: chillcatsolutions@gmail.com / contact@chillcatsolutions.com
          </StyledSection>
        </li>
        <li>
          <StyledSection>
            <StyledLink href={"https://www.linkedin.com/in/cesar-herrera-37514243/"} target="_blank" rel="noopener noreferrer">
                Cesar Herrera&apos;s LinkedIn profile
            </StyledLink>
          </StyledSection>
        </li>
      </ul>
    </StyledMain>
  )
}

export default Index
