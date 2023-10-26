import React from 'react';
import { LinkRendererProps } from './HeaderContainer';

function LinkRenderer({ render }: LinkRendererProps) {
  return (
    <ul>
      {render.map( (link, key) => (
        <li key={key}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default LinkRenderer;