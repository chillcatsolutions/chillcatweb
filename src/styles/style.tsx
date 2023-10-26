import styled from "styled-components";
import HeaderContainer from "../components/Header/HeaderContainer";


interface IStart {
  ref?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
}

export const Container = styled.div`
  font-size: 26px;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  width: 47%;
  cursor:pointer;
`;

export const HeaderContainerStyled = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
`;

export const Start = styled.div<IStart>`
  font-size: 26px;
  margin-left: 20px;
  margin-top: 20px;
  background-color: rgba(30, 30, 30, 0.66);
  border-radius: 15px;
  width: 100px;
  height: 100px;
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
`;

export const MainTitle = styled.h2`
  position: absolute;
  top: 25px;
  left: 140px;
  color: #aaaaaa;
  user-select: none;
`;

export const SecondaryTitle = styled.h2`
  position: absolute;
  top: 142px;
  left: 140px;
  color: #aaaaaa;
  user-select: none;
`;

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const ContactContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 655px;
  /* background-color: #ff00007a; */
  font-family: monospace;
  color: #cdcdcd;
  font-size: 28px;
  left: Calc(50% - 327px);
`;

export const CopyButton = styled.button`
  background-color: red;
  width: 100px;
  height: 30px;
  font-family: monospace;
  color: white;
  float: right;
`;

export const IntroContainer = styled(HeroContainer)`
  background-color: #1c1c1c;
  color: #d9d9d9;
  padding: 50px;
`;

export const FooterContainer = styled(HeroContainer)`
  background-color: #1c1c1c;
`;
