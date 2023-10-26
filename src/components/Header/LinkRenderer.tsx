import React from 'react';
import styled from 'styled-components';
import { LinkRendererProps } from './HeaderContainer';

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  transform: translateY(50%);
`;

export const ListItem = styled.li`  

`;

export const Link = styled.a`
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
      {render.map( (link, key) => (
        <ListItem key={key}>
          <Link href={link.url} target='_blank'>{link.name}</Link>
        </ListItem>
      ))}
    </List>
  );
}

export default LinkRenderer;