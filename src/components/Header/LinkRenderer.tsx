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