import { Footer } from '../../components/common/commonUI';
import {
  WrapperStyle,
  ButtonStyled,
  LogoContainer,
  NoLogin,
  CenterItems,
  NewIdBtn,
  KaKaoLoginBtn,
} from './index.styles';
import instagram from '../../assets/icons/instagram.png';
import user from '../../assets/icons/user.png';
import { useNavigate } from 'react-router-dom';
import kakao from '../../assets/icons/kakao.png';
import { kakaoLink } from '../../api/KakaoAPI';
const apiUrl = import.meta.env.VITE_API_URL;

const LoginOption = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleSignupClick = () => {
    navigate('/signup');
  };
  const handleMain = () => {
    navigate('/main');
  };
  const handleKakaoLogin = () => {
    window.location.href =
      `${apiUrl}/auth/kakao`;
    // navigate(kakaoLink);
  };
  return (
    <WrapperStyle>
      <CenterItems>
        <LogoContainer>
          <img src={instagram} />
        </LogoContainer>
        <NoLogin onClick={handleMain}>
          <img src={user} />
          <div style={{ color: 'black' }}>로그인 없이 이용하기</div>
        </NoLogin>
        <ButtonStyled onClick={handleLoginClick}>
          다른 계정으로 로그인
        </ButtonStyled>
      </CenterItems>
      <Footer>
        <KaKaoLoginBtn onClick={handleKakaoLogin}>
          <img src={kakao} />
          카카오로 시작
        </KaKaoLoginBtn>
        <NewIdBtn onClick={handleSignupClick}>새 계정 만들기</NewIdBtn>
      </Footer>
    </WrapperStyle>
  );
};
export default LoginOption;
