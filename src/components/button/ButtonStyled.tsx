import styled from "styled-components";
import { rosa, laranja, branco, preto } from '../../utils/Colors'


export const Btn = styled.button`
  background-color: ${rosa};
  font-family: 'Architects Around Bird';
  border: 1px solid ${preto};
  margin: 5px;
  transition: background 500ms;
  font-size: 18px;
  border-radius: 20px 30px;
  padding: 15px 15px;
  text-decoration: none;
  color: ${branco};
  box-shadow: 5px 0px 0px ${preto};
  &:hover,
  &:focus {
    background-color: ${laranja};
    border: 1px solid ${preto};
  }
  &:active {
    color: ${laranja};
    background-color: ${preto};
    box-shadow: 5px 0px 0px ${branco};
    border: 1px solid ${branco};
  }
  `
