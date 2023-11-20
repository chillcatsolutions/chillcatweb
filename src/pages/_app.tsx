import { useEffect, useRef } from "react";
import { HeroReferencesType, animationLogo } from "../utils/animationLogo";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import type { AppProps } from 'next/app'

import { Container, HeaderContainerStyled } from "../styles/style";
import Footer from "../components/Footer/Footer";


const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  overflow-y: scroll;
  overflow-y: overlay;
}
body{
  font-family:Verdana;
  background-color: #1C1C1C;

  &::-webkit-scrollbar{
    width: .5em;
    position: absolute;
  }

  &::-webkit-scrollbar-track{
    background-color: #000;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb{
    background-color: #aaa;
    border-radius: 10px;

    &:hover{
      background-color: #1c1c1c;
    }
  }

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
    document.title = "ChillcatSolutions";
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
