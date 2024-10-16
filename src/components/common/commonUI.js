import styled from "styled-components";

export const Wrapper = styled.div`
    width: 393px;
    height: 100vh;
    max-height: 859px;
    background-color: white;
    position: relative;
    justify-content: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const Footer = styled.div`
  bottom: 0;
  z-index: 2;
  width: 393px;
  /* height: 84px; */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

export const WaitWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
  font-size: 20px;
  font-weight: normal;
  color: #4f4f4f;
`;