import {
  WrapperStyle,
  NewIdBtn,
  LogoContainer,
  CenterItems,
} from '../loginOption/index.styles';
import { InputStyled, LoginBtn } from './index.styles';
import instagram from '../../assets/icons/instagram.png';
const Login = () => {
  return (
    <WrapperStyle>
      <CenterItems>
        <LogoContainer>
          <img src={instagram} />
        </LogoContainer>
        <InputStyled placeholder="아이디" />
        <InputStyled placeholder="비밀번호" />
        <LoginBtn>로그인</LoginBtn>
        <NewIdBtn>새 계정 만들기</NewIdBtn>
      </CenterItems>
    </WrapperStyle>
  );
};
export default Login;
