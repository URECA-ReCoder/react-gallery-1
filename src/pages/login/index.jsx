import {
  WrapperStyle,
  NewIdBtn,
  LogoContainer,
} from '../loginOption/index.styles';
import { InputStyled, LoginBtn, LoginCenterItem } from './index.styles';
import { Footer, Header } from '../../components/common/commonUI';
import instagram from '../../assets/icons/instagram.png';
import back from '../../assets/icons/back.png';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  return (
    <WrapperStyle>
      <Header>
        <img src={back} onClick={() => navigate(-1)}/>
      </Header>
      <LoginCenterItem>
        <LogoContainer>
          <img src={instagram} />
        </LogoContainer>
        <InputStyled placeholder="아이디" />
        <InputStyled placeholder="비밀번호" type='password'/>
        <LoginBtn>로그인</LoginBtn>
      </LoginCenterItem>
        <Footer>
        <NewIdBtn>새 계정 만들기</NewIdBtn>
        </Footer>
    </WrapperStyle>
  );
};
export default Login;
