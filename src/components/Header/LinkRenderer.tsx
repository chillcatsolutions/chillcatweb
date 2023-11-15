import React from 'react';
import styled from 'styled-components';
import { LinkRendererProps } from './HeaderContainer';
import Link from 'next/link';


export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  transform: translateY(50%);

  @media (max-width: 1366px){
    gap: 30px;
  }

  @media (max-width: 916px){
      flex-direction: column;
      background-color: #ffffff10;
      align-items: center;
      backdrop-filter: blur(10px);
      z-index: 1;
    }
`;

export const ListItem = styled.li`  
  cursor:pointer;
`;

export const StyledLink = styled.a`
  color: #AAAAAA;
  text-decoration: none;
  transition: all .3s;
  
  &:hover{
    color: #14761D;
  }

  @media (max-width: 1366px){
    font-size: .8em;
  }
`;

function LinkRenderer({ render }: LinkRendererProps) {
  return (
    <List>
      {render.map((link, key) => (
        <ListItem key={key}>
          {link.url.startsWith('http') ? (
            <StyledLink href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </StyledLink>
          ) : (
            <Link href={link.url}>
              <StyledLink>{link.name}</StyledLink>
            </Link>
          )}
        </ListItem>
      ))}
    </List>
  );
}

export default LinkRenderer;