import React from "react";
import styled from "styled-components";

const IconsWrapper = styled.ul<React.PropsWithChildren<{}>>`
  list-style: none;
  display: flex;
  gap: 10px;
`;

const IconWrapper = styled.li<React.PropsWithChildren<{}>>`
`;

const Icon = styled.a<React.AnchorHTMLAttributes<HTMLAnchorElement>>`
  text-decoration: none;
  color: #aaaaaa;
  width: 100%;
  height: 100%;
`;

const Svg = styled.svg<React.SVGProps<SVGSVGElement>>`
  border-radius: 10px;
  fill: #aaa;
  transition: all .3s;
  &:hover{
    background-color: #1c1c1c;
    fill:#1ea91ea8;
  }
`;

const iconsForRender = [
  // {
  //   name: "TwitterX",
  //   url: "/",
  //   icon: (
  //     <Svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 50 50"
  //       width="50px"
  //       height="50px"
  //     >
  //       <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z" />
  //     </Svg>
  //   ),
  // },

  {
    name: "Instagram",
    url: "https://www.instagram.com/chillcatsolutions/",
    icon: (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="50px"
        height="50px"
      >
        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
      </Svg>
    ),
  },

  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/cesar-herrera-37514243/",
    icon: (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50px"
        height="50px"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </Svg>
    ),
  },
];


function IconRender() {
  return (
    <IconsWrapper>
      {iconsForRender.map((iconRendered, index) => (
        <IconWrapper key={index}>
          <Icon href={iconRendered.url}>
            <i> {iconRendered.icon} </i>
          </Icon>
        </IconWrapper>
      ))}
    </IconsWrapper>
  );
}

export default IconRender;
