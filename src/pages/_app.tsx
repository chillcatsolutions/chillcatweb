import { useEffect, useRef } from "react";
import { HeroReferencesType, animationLogo } from "../utils/animationLogo";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import type { AppProps } from 'next/app'
import Typewriter from 'typewriter-effect/dist/core';

import { Container, HeaderContainerStyled } from "../styles/style";
import Footer from "../components/FooterCanvas/Footer";


const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family:Verdana;
}
`;
 
const theme = {
  colors: {
    primary: "#fafafa",
  },
};

type Link = {
  name: string;
  url: string;
};

export type LinkRendererProps = {
  render: Link[];
};

function MyApp({ Component, pageProps }: AppProps) {
  
  const startRef = useRef<HTMLDivElement>();
  const startTextRef = useRef<any>();
  const firstPipeRef = useRef<any>();
  const mainTitleRef = useRef<any>();
  const secondaryTitleRef = useRef<any>();
  const copyButtonRef = useRef<any>();
  const tl = useRef<gsap.core.Timeline>();

  const references = {
    startRef,
    startTextRef,
    firstPipeRef,
    mainTitleRef,
    secondaryTitleRef
  }

  useEffect(() => {
    // gsap.timeline().clear()
    animationLogo({
      ...references,
      copyButtonRef,
      tl
    })

    const typewriter = new Typewriter('#typewriter', {
      loop: false,
      delay: 60,
    });

    typewriter
    .pauseFor(4500)
    .typeString('Contact us at chillcatsolutions@gmail.com')
    .start();
  }, []);

  return (
    <>
      <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Container>
            <HeaderContainerStyled references={references as HeroReferencesType} />

              <Component {...pageProps} />

            <Footer />
          </Container>
        </ThemeProvider>
    </>
  );
}
export default MyApp
