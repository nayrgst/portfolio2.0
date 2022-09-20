import styled, { keyframes } from "styled-components"
import { branco, laranja, pretoClaro, rosa, preto } from "../../utils/Colors"
import { device } from "../../utils/Breakpoints"

export const transition = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
from {
  transform: translateZ(-300px);
};
to {
  transform: translateZ(0%);
};
`

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
};

to {
  transform: translate(0%);
};`

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
    height: 40rem;
  }

  @media ${device.laptop} { 
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    background-color: ${pretoClaro};
    height: 85vh;
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
    padding-top: 100px;
    background-color: ${pretoClaro};
    height: 46rem;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    text-align: center;
  }

  @media ${device.desktop || device.desktopL} {
    max-width: 1655px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    background-color: ${pretoClaro};
    height: 75rem;
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
  }

  @media ${device.laptopL} {
    border-radius: 5px 80px 80px;
    background-color: ${laranja};
    padding: 6px;
    margin-left: 30px;
    margin: 0px;
    height: 50vh;
  }

  @media ${device.desktop || device.desktopL} {
    border-radius: 5px 80px 80px;
    background-color: ${laranja};
    padding: 6px;
    margin: 0;
    height: 30rem;
    width: 30rem;
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
    height: 550px;
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
    margin-top: 0em;
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
    height: 70rem;
    width: 70rem;
    animation: ${transition} 2s;
    align-items: center;
    margin: 0;
  }`

export const Name = styled.h1`
  @media ${device.mobileS || device.mobileM || device.mobileL} {
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    background-color: ${laranja};
    border-radius: 30px 30px 0px 0px;
    color: ${branco};
    margin: 0px;
    width: 15rem;
    font-size: 0.6rem;
  }

  @media ${device.tablet} {
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    background-color: ${laranja};
    border-radius: 30px 30px 0px 0px;
    color: ${branco};
    margin: 0px;
    width: 15rem;
    font-size: 0.8rem;
  }

  @media ${device.laptop || device.laptopL} {
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    background-color: ${laranja};
    border-radius: 30px 30px 0px 0px;
    color: ${branco};
    margin: 0px;
    width: 360px;
    font-size: 1rem;
    text-align: center;
  }
  
  @media ${device.desktop || device.desktopL} {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 13px;
    text-align: center;
    background-color: ${laranja};
    border-radius: 30px 30px 0px 0px;
    color: ${branco};
    width: 25rem;
    font-size: 1.5rem;
    text-align: center;
  }`

export const Title = styled.h2`
  @media ${device.mobileS || device.mobileM || device.mobileL} {
    font-family: 'Josefin Sans', sans-serif;
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
    font-family: 'Josefin Sans', sans-serif;
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
    font-family: 'Josefin Sans', sans-serif;
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
    font-family: 'Josefin Sans', sans-serif;
    width: 40rem;
    background-color: ${rosa};
    color: ${branco};
    border-radius: 20px 20px 20px 20px;
    margin: 0px;
    margin-left: 0px;
    font-size: 2rem;
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
    width: 40rem;
    height: 15rem;
  }`



