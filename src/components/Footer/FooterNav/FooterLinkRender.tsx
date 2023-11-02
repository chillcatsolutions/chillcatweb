import React from 'react';
import styled from 'styled-components';


const WrapperList = styled.ul`
      list-style: none;
      text-decoration: none;
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
    [], // No links in this ul
    [
      { text: 'Link 4', url: 'https://link4.com' },
      { text: 'Link 5', url: 'https://link5.com' },
    ],
  ];

  return (
    <>
      {LinkMatrix.map((links, index) => (
        <WrapperList key={index}>
          {links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </WrapperList>
      ))}
    </>
  );
}

export default FooterLinkRender;