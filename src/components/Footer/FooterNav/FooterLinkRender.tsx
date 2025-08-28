import React from 'react';
import styled from 'styled-components';


const WrapperList = styled.ul<React.PropsWithChildren<{}>>`
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

const LinkWrapper = styled.li<React.PropsWithChildren<{}>>`
  
`;

const Link = styled.a<React.AnchorHTMLAttributes<HTMLAnchorElement>>`
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
      { text: 'Projects', url: '/projects' },
    ],
    [
      { text: 'Contact', url: '/contact' }
    ],
    [
      { text: 'Mission', url: '/mission' }
    ],
    [
      { text: 'Services', url: '/'},
    ]
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