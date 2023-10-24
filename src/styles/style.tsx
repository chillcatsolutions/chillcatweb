import styled from "styled-components";


interface IStart {
  ref?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
}

export const Container = styled.div`
  font-size: 26px;
  overflow: auto;
`;

export const HeaderContainer = styled.header`
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
`;

export const SecondaryTitle = styled.h2`
  position: absolute;
  top: 142px;
  left: 140px;
  color: #aaaaaa;
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
