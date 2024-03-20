import styled from "styled-components";
import { device } from "../../utils/Breakpoints";
import { pretoClaro, branco, preto, rosa } from "../../utils/Colors";

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
    height: 56.8rem;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    margin: 0;
    text-align: center;
  }
`

export const Btn = styled.div`
    @media ${device.mobileS || device.mobileM || device.mobileL} {}

    @media ${device.tablet} {}

    @media ${device.laptop || device.laptopL} {}
  
    @media ${device.desktop || device.desktopL} {
        cursor: pointer;
	    height: 100px;
	    width: 100px;
	    font-family: 'Titillium Web', sans-serif;
	    color: ${preto};
	    border-radius: 10px;
	    box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
	    background: ${branco};
	    margin: 1rem;
	    transition: 1s;
        display: flex;
	    justify-content: center;
	    align-items: center;
        span {
            width: 0px;
            overflow: hidden;
            transition: 1s;
            text-align: center;}
        &:hover {
	        width: 13rem;
	        border-radius: 5px;}
        &:hover span {
	        padding: 2px;
	        width: max-content;
            font-size: 1.5rem;
            color: ${preto}}
    }

`

export const Div = styled.div`
    @media ${device.mobileS || device.mobileM || device.mobileL} {}

    @media ${device.tablet} {}

    @media ${device.laptop || device.laptopL} {}

    @media ${device.desktop || device.desktopL} {
        display: flex;
        margin: auto;
        margin-top: 0rem;
        width: 80%;
        height: 50rem;
        border-radius: 5rem;
        background-color: ${preto};
        align-items: center;
        justify-content: center;
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
    display: flex;
    font-family: 'Rajdhani', sans-serif;
    width: 50rem;
    height: 5rem;
    background-color: ${rosa};
    color: ${branco};
    border-radius: 20px 20px 20px 20px;
    margin: 0px;
    margin-left: 0px;
    font-size: 3rem;
    text-align: center;
    align-items: center;
    justify-content: center;
  }`
