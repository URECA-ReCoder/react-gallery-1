import styled from "styled-components";
import { WrapperStyle } from "../loginOption/index.styles";
export const Titlestyled = styled.div`
    display: flex;
    width: 90%;
    font-size: 18px;
    justify-content: flex-start;
    padding: 10px 0px;
    font-weight: 600;
`;
export const ExplainStyled = styled.div`
    display: flex;
    width: 90%;
    font-size: 12px;
    padding-bottom: 10px;
`;

export const WrapperSignup = styled(WrapperStyle)`
     justify-content: flex-start;  /* 위에서부터 정렬 */
`;
export const ErrorMessage = styled.div`
    display: flex;
    width: 85%;
    color: red;
    margin-bottom: 5px;
    font-size: 12px;
    justify-content: flex-start;
    float: left;
`;