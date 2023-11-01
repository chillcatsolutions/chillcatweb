import React from "react";
import { HeroContainer } from "../../../styles/style";
import BackgroundCanvas from "./BackgroundCanvas.component";
import ContactText from "./ContactText";

function Hero() {
  return (
    <>
      <HeroContainer>
            <ContactText />
            <BackgroundCanvas />
      </HeroContainer>
    </>
  );
}

export default Hero;
