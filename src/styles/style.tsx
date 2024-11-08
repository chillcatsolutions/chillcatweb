import styled, { keyframes } from "styled-components";
import HeaderContainer from "../components/Header/HeaderContainer";

interface IStart {
  ref?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
}

export const Container = styled.div`
  position: relative;
  font-size: 26px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  height: 120px;

  /* @media (max-width: 916px) {
     background-color: {props => props.isChecked ? "rgba(0, 0, 0, 0.10)" : ""};
    backdrop-filter: {props => props.isChecked ? "blur(4px)" : ""};
  } */
`;

export const LogoWrapper = styled.div`
  cursor:pointer;
  width: 350px;
  position: relative;
  z-index: 10;
`;

export const HeaderContainerStyled = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Start = styled.div<IStart>`
  font-size: 26px;
  margin-left: 20px;
  margin-top: 20px;
  background-color: rgba(30, 30, 30, 0.66);
  border-radius: 15px;
  width: 100px;
  height: 100%;
  user-select:none;

  span {
    position: relative;
    display: block;
    text-align: center;
  }
`;

export const FirstPipe = styled.div`
  background-color: rgba(30, 169, 30, 0.66);
  height: 4px;
  width: 500px;
  position: absolute;
  top: 77px;
  left: 120px;
  border-radius: 10px;

  @media (max-width:451px){
    display: none;
  }
`;

export const MainTitle = styled.h2`
  position: absolute;
  top: 25px;
  left: 140px;
  color: #aaaaaa;
  user-select: none;

  @media (max-width:451px){
    display: none;
  }
`;

export const SecondaryTitle = styled.h2`
  position: absolute;
  top: 142px;
  left: 140px;
  color: #aaaaaa;
  user-select: none;

  @media (max-width:451px){
    display: none;
  }
`;

export const MainContainer = styled.main`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width:451px){
    padding: 10px;
    margin: 4px;
    margin-top: 22px;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactContainer = styled.div`
  width: 655px;
  font-family: monospace;
  color: #cdcdcd;
  font-size: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
`;

const buttonShowAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const CopyButton = styled.button`
  cursor: pointer;
  background-color: #a700005c;
  width: 100px;
  height: 30px;
  font-family: monospace;
  color: white;
  opacity: 0;
  transition: all 0.3s;

  &:hover{
    background-color: #ff000052;
  }

  &.buttonShowAnimation {
    animation: ${buttonShowAnimation} 4s 7s forwards;
    opacity: 0;
  }
`;

export const IntroContainer = styled.section`
  color: #d9d9d9;
  padding: 50px;
`;

export const IntroContentContainer = styled.section`
  color: #d9d9d9;
  padding: 50px;
`

export const FooterContainer = styled.footer`
  width: 100%;
  height: 550px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 25px;
  padding-bottom: 0;
`;


export const ParraContainer = styled.div`
  flex-basis: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff10;
  border-radius: 5px;
  padding: 30px;

  @media (max-width: 1366px) {
    font-size: .7em;
  }

  @media (max-width: 451px){
    padding: 10px;
    font-size: .6em;
    text-align: center;
    font-weight: bold;
  }
`;
export const TitleContainer = styled.div`
  flex-basis: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff10;
  border-radius: 5px;
  padding: 30px;
  text-align: center;
`;