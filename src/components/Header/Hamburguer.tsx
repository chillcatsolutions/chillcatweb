import React from 'react'
import styled from 'styled-components'


const HambWrapper = styled.div`
      position: relative;
      display: none;
      
      & input{
            display: none;
      }

      & label{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50px;
            cursor: pointer;
            & div, div::after, div::before{
                  transition: all .3s;
            }

            &:hover div{
                  background-color: #14761D;
                  &::after{background-color: #14761D;}
                  &::before{background-color: #14761D;}
            }
      }
`;
const HambButton = styled.div`
      position: relative;
      width: 55px;
      height: 8px;
      background-color: #aaa;
      border-radius: 10px;
      
      &::after{ 
            content: "";
            position: absolute;
            top: -15px;
            width: 55px;
            height: 8px;
            background-color: #aaa;
            border-radius: 10px;
      }
      &::before{
            content: "";
            position: absolute;
            bottom: -15px;
            width: 55px;
            height: 8px;
            background-color: #aaa;
            border-radius: 10px;
      }
`;


function Hamburguer() {
  return (
      <HambWrapper>
            <label htmlFor='Burguer'> <HambButton/> </label>
            <input type="checkbox" id='Burguer' name='Burguer'/>
      </HambWrapper>
  )
}

export default Hamburguer
