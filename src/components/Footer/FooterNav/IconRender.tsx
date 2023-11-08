import React from 'react';
import styled from 'styled-components';
import Twitter from '../../../assets/icons8-twitter.svg';
import Facebook from '../../../assets/icons8-facebook.svg';
import Instagram from '../../../assets/icons8-instagram.svg';

const IconsWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
`;
const IconWrapper = styled.li`

`;
const Icon = styled.a`
  text-decoration: none;
  color: #aaaaaa;
`;

function IconRender() {
  const iconsForRender = [
    { name: "Twitter", url: "/", icon: Twitter},
    { name: "Facebook", url: "/", icon: Facebook },
    { name: "Instagram", url: "/", icon: Instagram },
  ];
  return (
    <IconsWrapper>
      {iconsForRender.map((iconRendered, index) => (
        <IconWrapper key={index}>
          <Icon href={iconRendered.url}><img src={iconRendered.icon.src}></img></Icon>
        </IconWrapper>
      ))}
    </IconsWrapper>
  );
}

export default IconRender;