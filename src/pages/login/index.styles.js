import styled from "styled-components";
import { Wrapper } from "../../components/common/commonUI";
export const ButtonStyled = styled.div`
    width: 90%;
    border-radius: 60px;
    margin: auto;
    text-align: center;
    padding: 7px 0px;
    border: 1px solid #CBD2D9;
    color: #000;
    font-size: 14px;
`;
export const LogoContainer = styled.div`
    width: 100%;
    display: flex;  /* Flexbox로 변경 */
    justify-content: center;  /* 가로 정렬 */
    align-items: center;  /* 세로 정렬 */
    img {
        margin: auto;
        width: 100px;
    }
`;

export const NoLogin = styled.div`
    width: 90%;
    margin: auto;
    padding: 10px 15px;
    display: flex;
    background-color: #fff;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 600;
    img{
        width: 60px;
        margin-right: 20px;
    }
`;

export const CenterItems = styled.div`
    display: flex;
    flex-direction: column;  /* 수직 정렬 */
    justify-content: center;  /* 수직 중앙 정렬 */
    align-items: center;  /* 가로 중앙 정렬 */
    width: 100%;  /* 너비를 전체로 설정 */
    height: 100%;  /* 높이도 전체로 설정 */
`;

export const WrapperStyle = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    background: rgb(254,247,244);
background: linear-gradient(122deg, rgba(254,247,244,1) 0%, rgba(247,241,250,1) 22%, rgba(238,245,254,1) 50%, rgba(236,247,249,1) 77%, rgba(237,251,243,1) 100%);
justify-content: center;
align-items: center;  /* 가로 중앙 정렬 */
/* margin: auto; */
`;