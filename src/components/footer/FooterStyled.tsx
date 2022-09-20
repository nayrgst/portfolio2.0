import styled from "styled-components";
import { branco } from '../../utils/Colors'

export const FooterTagP = styled.p`
  font-size: 10px;
  display: flex;
  justify-content: center;
  font-style: italic;
  text-align: center;
  margin: 2px;
  font-family: sans-serif;
  color: ${branco};
`

export const FooterT = styled.footer`
  padding: 10px;
  display: flex;
  align-items: flex-end;
  height: 20px;
  width: 100%;
  justify-content: space-around;
`