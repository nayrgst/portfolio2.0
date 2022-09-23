import styled from "styled-components";
import { branco, github, linkedin, preto } from "../../utils/Colors";

export const Btn = styled.div`
  cursor: pointer;
	height: 50px;
	width: 50px;
	font-family: 'Titillium Web', sans-serif;
	color: ${github};
	border-radius: 10px;
	box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
	background: ${branco};
	margin: 5px;
	transition: 1s;
  display: flex;
	justify-content: center;
	align-items: center;
  span {
    width: 0px;
    overflow: hidden;
    transition: 1s;
    text-align: center;
  }
  &:hover {
	width: 150px;
	border-radius: 5px;
  }
  &:hover span {
	padding: 2px;
	width: max-content;
  color: ${preto}
}
`

export const A = styled.a`
  color: ${branco};
  `

export const Div = styled.div`
	display: flex;
  margin: auto;
  margin-top: 5rem;
`

export const Svg = styled.svg`
	fill: ${github};`

export const Svg2 = styled.svg`
  fill: ${linkedin};`
