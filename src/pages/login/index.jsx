import {
  WrapperStyle,
  NewIdBtn,
  LogoContainer,
} from '../loginOption/index.styles';
import { InputStyled, LoginBtn, LoginCenterItem } from './index.styles';
import { Footer} from '../../components/common/commonUI';
import instagram from '../../assets/icons/instagram.png';
import back from '../../assets/icons/back.png';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import { LoginAPI } from '../../api/LoginAPI';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [inputInfo, setInputInfo] = useState({
    email: '',
    password:'',
  });

  const onChangeInfo = (e) => {
    setInputInfo({ ...inputInfo, [e.target.name]: e.target.value });
  };

  const onClickLogin = async () => {
    if (!inputInfo.email || !inputInfo.password) {
      alert('아이디, 비밀번호를 모두 입력하세요.');
      return;
    }
    try {
      const data = await LoginAPI(inputInfo); // 로그인 API 호출
      sessionStorage.setItem('token', data.token);
      navigate('/main');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };
  const handleSignupClick = () =>{
    navigate('/signup')
  }
  return (
    <WrapperStyle>
      <Header />
      <LoginCenterItem>
        <LogoContainer>
          <img src={instagram} />
        </LogoContainer>
        <InputStyled placeholder="이메일" name="email" onChange={onChangeInfo} />
        <InputStyled placeholder="비밀번호" type='password' name="password"  onChange={onChangeInfo}/>
        <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
      </LoginCenterItem>
        <Footer>
        <NewIdBtn onClick={handleSignupClick}>새 계정 만들기</NewIdBtn>
        </Footer>
    </WrapperStyle>
  );
};
export default Login;
