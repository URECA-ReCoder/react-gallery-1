import styled from "styled-components";
import { theme } from "../../style/theme";
import { ButtonStyled } from "../loginOption/index.styles";
import { CenterItems } from "../loginOption/index.styles";
import Login from ".";
export const InputStyled = styled.input`
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  padding:15px;
  border: 1px solid ${theme.color.DefaultBorder};
  margin-bottom: 10px;
  color: #000;
  :focus {
    border: none;
    outline: none;  /* 포커스 시 outline 제거 */
  }
  &&::placeholder{
    font-size: 13px;
  }
`;
export const LoginBtn = styled(ButtonStyled)`
  background-color: ${theme.color.BuleBorder};
  color: #fff;
  font-weight: 400;
  border: none;
  padding: 12px;
`;

export const LoginCenterItem = styled(CenterItems)`
  margin-top: 0;
`;