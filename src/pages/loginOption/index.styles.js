import styled from "styled-components";
import { Wrapper } from "../../components/common/commonUI";
import { theme } from "../../style/theme";
export const ButtonStyled = styled.button`
  width: 90%;
  border-radius: 60px;
  text-align: center;
  padding: 10px 0px;
  border: 1.5px solid ${theme.color.DefaultBorder};
  color: #000;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 250px;
  font-weight: 600;
  `;
export const NewIdBtn = styled(ButtonStyled)`
  border: 1.5px solid ${theme.color.BuleBorder};
  color: #0064E0;
  margin: 0px auto;
  margin-bottom: 20px;
  width: 90%; /* 중앙 정렬에 도움을 줄 수 있는 너비 설정 */
`;
export const KaKaoLoginBtn = styled(NewIdBtn)`
  background-color: #f9e000;
  margin-bottom: 10px;
  border: #f9e000;
  color: #000;
  display: flex;  /* Flexbox로 변경 */
  align-items: center;  /* 세로 가운데 정렬 */
  justify-content: center;  /* 가로 가운데 정렬 */
  padding: 7px;

  img {
    width: 25px;
  }
`;
export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: auto;
    width: 65px;
    margin-bottom: 60px;
  }
`;

export const NoLogin = styled.div`
  width: 90%;
  padding: 7px 15px;
  display: flex;
  background-color: #ffffff;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05); 
  cursor: pointer;
  img {
    width: 60px;
    margin-right: 20px;
  }
`;

export const CenterItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  /* 수직 중앙 정렬 */
  align-items: center;  /* 가로 중앙 정렬 */
  width: 100%;  /* 너비를 전체로 설정 */
  height: 100%;
  gap: 0; /* 요소 간 간격을 없앰 */
  margin-top: 35px;
`;

export const WrapperStyle = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;  /* 세로 중앙 정렬 */
  align-items: center;  /* 가로 중앙 정렬 */
  height: 100vh;  /* 화면 전체 높이 사용 */
  max-height: 859px;
  background: rgb(254,247,244);
  background: linear-gradient(100deg, rgba(254,247,244,1) 0%, rgba(247,241,250,1) 12%, rgba(238,245,254,1) 54%, rgba(236,247,249,1) 77%, rgba(237,251,243,1) 100%);
`;
