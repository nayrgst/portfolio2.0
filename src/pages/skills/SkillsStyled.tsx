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
    height: 51.5rem;
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

export const Icon = styled.div`
    @media ${device.mobileS || device.mobileM || device.mobileL} {
      cursor: pointer;
	    height: 1rem;
	    width: 1rem;
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

    @media ${device.tablet} {
      cursor: pointer;
	    height: 10rem;
	    width: 10rem;
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

    @media ${device.laptop || device.laptopL} {      cursor: pointer;
	    height: 10rem;
	    width: 10rem;
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
            color: ${preto}}}
  
    @media ${device.desktop || device.desktopL} {
      cursor: pointer;
	    height: 10rem;
	    width: 10rem;
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
    @media ${device.mobileS || device.mobileM || device.mobileL} {
      display: grid;
      grid: repeat(4, 2rem) / auto-flow 10rem;
      width: 90%;
      height: 40rem;
      border-radius: 5rem;
      background-color: ${preto};
      justify-content: center;
      justify-items: center;
      gap: 1em;
    }

    @media ${device.tablet} {
      display: flex;
      margin: auto;
      width: 90%;
      margin-top: 0px;
      height: 40rem;
      border-radius: 5rem;
      background-color: ${preto};
      align-items: center;
      justify-content: center;
    }

    @media ${device.laptop || device.laptopL} {
      display: flex;
      width: 90%;
      margin-top: 0px;
      height: 40rem;
      border-radius: 5rem;
      background-color: ${preto};
      align-items: center;
      justify-content: center;
    }

    @media ${device.desktop || device.desktopL} {
        display: grid;
        grid: repeat(4, 10rem) / auto-flow 30rem;
        width: 80%;
        height: 50rem;
        border-radius: 5rem;
        background-color: ${preto};
        align-content: center;
        justify-items: center;
        gap: 1em;
    }`

export const Title = styled.h2`
  @media ${device.mobileS || device.mobileM || device.mobileL} {
    font-family: 'Rajdhani', sans-serif;
    width: 10rem;
    background-color: ${rosa};
    color: ${branco};
    border-radius: 20px 20px 0px 0px;
    margin: auto;
    margin-bottom: 0px;
    font-size: 1.5rem;
    text-align: center;
    justify-content: center;
  }

  @media ${device.tablet} {
    font-family: 'Rajdhani', sans-serif;
    width: 22rem;
    background-color: ${rosa};
    color: ${branco};
    border-radius: 20px 20px 0px 0px;
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
    border-radius: 20px 20px 0px 0px;
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
    border-radius: 20px 20px 0px 0px;
    margin: 0px;
    margin-left: 0px;
    font-size: 3rem;
    text-align: center;
    align-items: center;
    justify-content: center;
  }`
