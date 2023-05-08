import styled, { keyframes } from "styled-components";
import { device } from "../../utils/Breakpoints";
import { branco, laranja, preto, pretoClaro, rosa } from "../../utils/Colors";

export const transition = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  from {
    transform: translateZ(-300px);
  }
  to {
    transform: translateZ(0%);
  }
`;

export const goBack = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    opacity: 2;
  }
  from {
    transform: translate(-300px);
  }
  to {
    transform: translate(0%);
  }
`;

export const flic = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const PrincipalDiv = styled.div`
  @media ${device.mobileS || device.mobileM || device.mobileL} {
    display: flex;
    overflow-x: hidden;
    background-color: ${pretoClaro};
    flex-direction: column;
    width: 100%;
  }

  @media ${device.tablet} {
    display: flex;
    overflow-x: hidden;
    background-color: ${pretoClaro};
    flex-direction: column;
    width: 100%;
    height: 50rem;
  }

  @media ${device.laptop} { 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${pretoClaro};
    height: 95vh;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    text-align: center;
    overflow-x: hidden;
  }

  @media ${device.laptopL} {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${pretoClaro};
    height: 50rem;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    text-align: center;
  }

  @media ${device.desktop || device.desktopL} {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${pretoClaro};
    height: 70rem;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    margin: 0;
    text-align: center;
  }
`

export const Profile = styled.img`
  
  @media ${device.mobileS || device.mobileM || device.mobileL} {
    border-radius: 5px 80px 80px;
    background-color: ${laranja};
    padding: 6px;
    margin: 0px;
    height: 260px;
    width: 260px;
  }

  @media ${device.tablet} {
    border-radius: 5px 80px 80px;
    background-color: ${laranja};
    padding: 6px;
    margin: 0px;
    height: 350px;
    width: 350px;
  }

  @media ${device.laptop} { 
    border-radius: 5px 80px 80px;
    background-color: ${laranja};
    padding: 6px;
    margin-left: 30px;
    margin: 0px;
    height: 370px;
    width: 370px;
  }

  @media ${device.laptopL} {
    border-radius: 5px 80px 80px;
    background-color: ${laranja};
    padding: 6px;
    margin-left: 30px;
    margin: 0px;
    height: 45vh;
    width: 45vh;
  }

  @media ${device.desktop || device.desktopL} {
    border-radius: 5px 80px 80px;
    background-color: ${laranja};
    padding: 6px;
    margin: 0;
    margin-left: 15vh;
    margin-top: 28vh;
    height: 60vh;
    width: 60vh;
  }`

  export const LeftDiv = styled.div`
  @media ${device.mobileS || device.mobileM || device.mobileL} {
    display: flex;
    flex-direction: center;
    margin: auto;
    margin-top: 90px;
    height: 300px;
    animation: ${goBack} 2s;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    height: 550px;
    animation: ${goBack} 2s;
    margin-left: 2rem;
    margin: auto;
    margin-top: 7rem;
  }

  @media ${device.laptop || device.laptopL} { 
    display: flex;
    flex-direction: center;
    margin: auto;
    margin-top: 12vh;
    height: 500px;
    animation: ${goBack} 2s;
  }

  @media ${device.desktop || device.desktopL} {
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100vh;
    height: 200vh;
    animation: ${goBack} 2s;
  }`

export const RightDiv = styled.div`
  @media ${device.mobileS || device.mobileM || device.mobileL} {
    display: flex;
    flex-direction: column;
    height: 20rem;
    width: 20rem;
    animation: ${transition} 2s;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    height: 40rem;
    width: 40rem;
    animation: ${transition} 2s;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 450px;
    animation: ${transition} 2s;
    margin-top: 0;
    align-items: center;
  }

  @media ${device.laptopL} {
    display: flex;
    flex-direction: column;
    height: 500px;
    animation: ${transition} 2s;
    align-items: center;
    margin-bottom: 9rem;
  }
  
  @media ${device.desktop || device.desktopL} {
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100vh;
    height: 200vh;
  }`

export const Name = styled.p`
  @media ${device.mobileS || device.mobileM || device.mobileL} {
    font-family: 'Rajdhani', sans-serif;
    text-align: center;
    background-color: ${laranja};
    border-radius: 30px 30px 0px 0px;
    color: ${branco};
    margin: 0px;
    width: 15rem;
    font-size: 10vw;
    padding: 7px;
    display: inline;
  }

  @media ${device.tablet} {
    font-family: 'Rajdhani', sans-serif, bold;
    text-align: center;
    background-color: ${laranja};
    border-radius: 30px 30px 0px 0px;
    color: ${branco};
    margin: 0px;
    font-size: 2em;
    padding: 7px;
    display: inline;
  }

  @media ${device.laptop || device.laptopL} {
    font-family: 'Rajdhani', sans-serif;
    text-align: center;
    background-color: ${laranja};
    border-radius: 30px 30px 0px 0px;
    color: ${branco};
    margin: 0px;
    width: 380px;
    font-size: 3rem;
    text-align: center;
    padding: 7px;
    display: inline;
  }
  
  @media ${device.desktop || device.desktopL} {
    font-family: 'Rajdhani', sans-serif;
    font-size: 13px;
    text-align: center;
    background-color: ${laranja};
    border-radius: 30px 30px 0px 0px;
    color: ${branco};
    width: 25rem;
    font-size: 3.5rem;
    text-align: center;
    padding: 15px;
    display: inline;
  }`

export const Title = styled.h2`
  @media ${device.mobileS || device.mobileM || device.mobileL} {
    font-family: 'Rajdhani', sans-serif;
    width: 19rem;
    background-color: ${rosa};
    color: ${branco};
    border-radius: 20px 20px 20px 20px;
    margin: 0px;
    margin-left: 0px;
    font-size: 1rem;
    text-align: center;
  }

  @media ${device.tablet} {
    font-family: 'Rajdhani', sans-serif;
    width: 22rem;
    background-color: ${rosa};
    color: ${branco};
    border-radius: 20px 20px 20px 20px;
    margin: 0px;
    margin-left: 0px;
    font-size: 1rem;
    text-align: center;
  }

  @media ${device.laptop || device.laptopL} {
    font-family: 'Rajdhani', sans-serif;
    width: 100%;
    background-color: ${rosa};
    color: ${branco};
    border-radius: 20px 20px 20px 20px;
    margin: 0px;
    margin-left: 0px;
    font-size: 1.5rem;
    text-align: center;
  }
  
  @media ${device.desktop || device.desktopL} {
    font-family: 'Rajdhani', sans-serif;
    width: 40rem;
    background-color: ${rosa};
    color: ${branco};
    border-radius: 20px 20px 20px 20px;
    margin: 0px;
    margin-left: 0px;
    font-size: 1.5rem;
    text-align: center;
  }`

  

export const Resume = styled.div`
  @media ${device.mobileS || device.mobileM || device.mobileL} {
    font-family: URW chanccery L, Medium italic;
    font-style: italic;
    text-align: center;
    margin-top: 5px;
    color: ${preto};
    margin-top: 3rem;
    font-size: 1.3rem;
    padding: 2rem;
    background-color: ${rosa};
    border-radius: 2rem;
  }

  @media ${device.tablet} {
    font-family: URW chanccery L, Medium italic;
    font-style: italic;
    text-align: center;
    margin-top: 5px;
    color: ${preto};
    margin-top: 3rem;
    font-size: 1.3rem;
    padding: 2rem;
    background-color: ${rosa};
    border-radius: 2rem;
  }
  
  @media ${device.laptop} {
    font-family: URW chanccery L, Medium italic;
    font-style: italic;
    font-size: 20px;
    text-align: center;
    margin-left: 15px;
    margin-top: 5px;
    color: ${preto};
    margin-top: 20px;
    font-size: 1.5rem;
  }

  @media ${ device.laptopL} {
    font-family: URW chanccery L, Medium italic;
    font-style: italic;
    text-align: center;
    margin-left: 15px;
    color: ${preto};
    margin-top: 20px;
    font-size: 1.5rem;
    width: 40rem;
  }
  
  @media ${device.desktop || device.desktopL} {
    font-family: URW chanccery L, Medium italic;
    font-style: italic;
    text-align: center;
    color: ${preto};
    font-size: 2rem;
    width: 70vh;
    height: 30vh;
  }`



