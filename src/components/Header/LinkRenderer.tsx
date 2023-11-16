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
  transition: all .3s;

  @media (max-width: 1366px){
    gap: 30px;
  }

  @media (max-width: 916px){
      position: absolute;
      flex-direction: column;
      align-items: center;
      backdrop-filter: blur(4px);
      z-index: 1;
      width: 100vw;
    }
`;

export const ListItem = styled.li`  

  @media (max-width: 916px){
    border-bottom: 5px solid #cccccc10;
    width: 50%;
    text-align: center;
  }
`;

export const StyledLink = styled.a`
  color: #AAAAAA;
  text-decoration: none;
  transition: all .3s;
  width: 100%;
  height: 100%;
  cursor: pointer;
  
  &:hover{
    color: #14761D;
  }

  @media (max-width: 1366px){
    font-size: .8em;
  }

  @media (max-width: 916px){
    &:hover{
        border-bottom: 2px solid #fff;
        border-radius: 10px;
        padding: 5px;
        border-bottom: 2px solid #14761D;
    }
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