import styled from "styled-components";
export const Wrapper = styled.div`
    width: 393px;
    height: 100vh;
    max-height: 859px;
    background-color: white;
    justify-content: center;
    `;
export const Footer = styled.div`
  bottom: 0;
  z-index: 2;
  width: 393px;
  height: 84px;
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

export const Header = styled.div`
    padding: 20px 15px;
    display: flex;
    width: 100%;
    justify-content: flex-start; /* 가로 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
    img{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`;
