import React from 'react';
import styled from 'styled-components';


const WrapperList = styled.ul`
  list-style: none;
  display:flex;
  flex-direction: column;
  gap: 5px;
`;

const LinkWrapper = styled.li`
  
`;

const Link = styled.a`
  text-decoration: none;
  color: #aaaaaa;  
  font-size: .9em;

  &:hover{
    color: #14761D;
    font-weight: bolder;
  }
`;

function FooterLinkRender() {
  type Link = { text: string, url: string };

  const LinkMatrix: Link[][] = [
    [
      { text: 'Link 1', url: 'https://link1.com' },
      { text: 'Link 2', url: 'https://link2.com' },
    ],
    [
      { text: 'Link 3', url: 'https://link3.com' },
    ],
    [
      { text: 'Link extra', url: '/'},
    ],
    [
      { text: 'Link 4', url: 'https://link4.com' },
      { text: 'Link 5', url: 'https://link5.com' },
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