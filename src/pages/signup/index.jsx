import Header from '../../components/common/Header';
import { LoginBtn, InputStyled,LoginCenterItem } from '../login/index.styles';
import { WrapperSignup,Titlestyled, ExplainStyled } from './index.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterAPI } from '../../api/RegisterAPI';
const Signup = () => {
    const [step, setStep] = useState(1);
    const [registInfo, setRegistInfo] = useState({
        "username": '',
        "password" :'',
        "email": '',
    })
    const navigate = useNavigate();
    
    const nextStep = () => {
        if (step === 1 && !registInfo.username) {
            alert('아이디를 입력해주세요.');
            return;
        }
        if (step === 2 && !registInfo.password) {
            alert('비밀번호를 입력해주세요.');
            return;
        }
        setStep(step + 1);
    };

      // 회원가입 함수
      const completeSignup = async () => {
        if (!registInfo.email) {
            alert('이메일을 입력해주세요.');
            return;
        }
        try {
            // 회원가입 API 호출
            const response = await RegisterAPI(registInfo);
            alert('회원가입이 완료되었습니다.');
            navigate('/login');
        } catch (error) {
            alert(error.message);
        }
    };


    const handleChange = (e) => {
        setRegistInfo({
            ...registInfo,[e.target.name]: e.target.value,
        });
    };
    return (
        <WrapperSignup>
            <Header/>
            {step === 1 && (
            <LoginCenterItem>
             

                <Titlestyled>아이디 입력</Titlestyled>
            <ExplainStyled>아이디를 입력하세요.</ExplainStyled>
            <InputStyled placeholder='아이디' onChange={handleChange}   name="username"/>
            
            <LoginBtn onClick={nextStep}>다음</LoginBtn>
        </LoginCenterItem>
        )}
            {step === 2 && (
                      <LoginCenterItem>

            

                <Titlestyled>비밀번호 입력</Titlestyled>
            <ExplainStyled>비밀번호를 입력하세요.</ExplainStyled>
            <InputStyled placeholder='비밀번호' type='password' onChange={handleChange}   name="password"/>
              
            <LoginBtn onClick={nextStep}>다음</LoginBtn>
                      </LoginCenterItem>
        )}
            {step  === 3 && (
                      <LoginCenterItem>

      
                <Titlestyled>이메일 입력</Titlestyled>
            <ExplainStyled>이메일를 입력하세요.</ExplainStyled>
            <InputStyled placeholder='이메일' value={registInfo.email} onChange={handleChange}   name="email"/>
          
            <LoginBtn onClick={completeSignup}>확인</LoginBtn>
                      </LoginCenterItem>
        )}
        </WrapperSignup>
    );
};
export default Signup;