import { Footer } from '../../components/common/commonUI';
import {
  WrapperStyle,
  ButtonStyled,
  LogoContainer,
  NoLogin,
  CenterItems,
  NewIdBtn,
} from './index.styles';
import instagram from '../../assets/icons/instagram.png';
import user from '../../assets/icons/user.png';
import { useNavigate } from 'react-router-dom';
const LoginOption = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('login');
  };

  return (
    <WrapperStyle>
      <CenterItems>
        <LogoContainer>
          <img src={instagram} />
        </LogoContainer>
        <NoLogin>
          <img src={user} />
          <div style={{ color: 'black' }}>로그인 없이 이용하기</div>
        </NoLogin>
        <ButtonStyled onClick={handleLoginClick}>
          다른 계정으로 로그인
        </ButtonStyled>
      </CenterItems>
      <Footer>
        <NewIdBtn>새 계정 만들기</NewIdBtn>
      </Footer>
    </WrapperStyle>
  );
};
export default LoginOption;
