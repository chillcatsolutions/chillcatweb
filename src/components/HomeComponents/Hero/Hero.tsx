import React from "react";
import { HeroContainer } from "../../../styles/style";
import BackgroundCanvas from "./BackgroundCanvas.component";
import ContactText from "./ContactText";

const Hero = () => {
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
