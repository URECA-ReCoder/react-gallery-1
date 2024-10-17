import {
  WrapperStyle,
  NewIdBtn,
  LogoContainer,
} from '../loginOption/index.styles';
import { InputStyled, LoginBtn, LoginCenterItem } from './index.styles';
import { Footer } from '../../components/common/commonUI';
import instagram from '../../assets/icons/instagram.png';
import back from '../../assets/icons/back.png';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import { LoginAPI } from '../../api/LoginAPI';
import { useState } from 'react';
import useAuth from '../../store/useAuth';

const Login = () => {
  const navigate = useNavigate();
  const [inputInfo, setInputInfo] = useState({
    email: '',
    password: '',
  });
  const { login } = useAuth(); //zustand의 로그인 함수 불러오기

  const onChangeInfo = (e) => {
    setInputInfo({ ...inputInfo, [e.target.name]: e.target.value });
  };

  const onClickLogin = async () => {
    if (!inputInfo.email || !inputInfo.password) {
      alert('아이디, 비밀번호를 모두 입력하세요.');
      return;
    }
    try {
      const { token, user } = await LoginAPI(inputInfo); // 로그인 API 호출 후 토큰과 사용자 정보 반환
      login(user, token, 'local'); // Zustand 스토어에 사용자 정보와 토큰 저장

      console.log('User Info:', user);
      console.log('JWT Token:', token);
      navigate('/main'); // 메인 페이지로 이동
      //JWT 토큰을 sessionStorage에 저장
      // sessionStorage.setItem('token', data.token); //zustand의 미들웨어를 사용해 sessionStorage에 저장
      navigate('/main');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <WrapperStyle>
      <Header />
      <LoginCenterItem>
        <LogoContainer>
          <img src={instagram} />
        </LogoContainer>
        <InputStyled
          placeholder="이메일"
          name="email"
          onChange={onChangeInfo}
        />
        <InputStyled
          placeholder="비밀번호"
          type="password"
          name="password"
          onChange={onChangeInfo}
        />
        <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
      </LoginCenterItem>
      <Footer>
        <NewIdBtn onClick={handleSignupClick}>새 계정 만들기</NewIdBtn>
      </Footer>
    </WrapperStyle>
  );
};
export default Login;
