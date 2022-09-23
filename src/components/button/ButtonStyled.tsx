import styled from "styled-components";
import { branco, rosa} from "../../utils/Colors";

export const All = styled.div`
  padding: 0;
  text-decoration: none;
  `

  export const Btn = styled.button`
    font-size: 25px;
    width: 8em;
    height: 2em;
    text-align: center;
    line-height: 2em;
    font-family: 'Titillium Web', sans-serif;
    background: ${branco};
    border: 0px;
    border-radius: 80px 80px 80px;
    text-transform: capitalize;
    position: relative;
    transition: 0.5s;
    margin: 0.5em;
    &:before, :after {
      content: '';
      position: absolute;
      width: 0.7em;
      height: 0.7em;
      border-radius: 50%;
      transition: 0.5s cubic-bezier(0.5, -0.6, 0.25, 1.5);
      top: calc(50% - 0.8em / 2);
    }
    &:before { left: 0; z-index: -1;}
    &:after {right: 0; z-index: -2;}
    &:hover { color: ${branco}}
    &:hover::before,
    &:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 80px 80px 80px;
    background-color: ${rosa}}
    &:hover,:before { top: 0 }
    &:hover,:after {
      right: -0.5em;
      filter: brightness(0.8);
    }`