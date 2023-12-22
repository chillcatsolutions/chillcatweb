import React from 'react';
import styled from 'styled-components';


const WrapperList = styled.ul`
  list-style: none;
  display:flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 715px){
    flex-basis: 40%;
    gap: 0;
    font-size: .7em;
    font-weight: bold;
  }
`;

const LinkWrapper = styled.li`
  
`;

const Link = styled.a`
  text-decoration: none;
  color: #aaaaaa;  
  font-size: .9em;
  transition: all .3s;

  &:hover{
    color: #1ea91ea8;
  }
`;

function FooterLinkRender() {
  type Link = { text: string, url: string };

  const LinkMatrix: Link[][] = [
    [
      { text: 'Mission', url: '/mission' },
      { text: 'About Us', url: '/' },
    ],
    [
      { text: 'More Projects', url: '/projects' },
    ],
    [
      { text: 'Developers', url: '/'},
    ],
    [
      { text: 'extra1', url: '/' },
      { text: 'extra2', url: '/' },
    ],
  ];

  return (
    <>
      {LinkMatrix.map((links, index) => (
        links.length > 0 ? (
          <WrapperList key={index}>
            {links.map((link, linkIndex) => (
              <LinkWrapper key={linkIndex}>
                <Link href={link.url}>{link.text}</Link>
              </LinkWrapper>
            ))}
          </WrapperList>
        ) : null
      ))}
    </>
  );
}
export default FooterLinkRender;