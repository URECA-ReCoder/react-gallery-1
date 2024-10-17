import Header from '../../components/common/Header';
import { LoginBtn, InputStyled,LoginCenterItem } from '../login/index.styles';
import { WrapperSignup,Titlestyled, ExplainStyled ,ErrorMessage} from './index.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterAPI } from '../../api/RegisterAPI';
const Signup = () => {
    const [step, setStep] = useState(1);
    const [registInfo, setRegistInfo] = useState({
        "username": '',
        "password" :'',
        "email": '',
    });

    const [errors, setErrors] = useState({ username:'', password:'', email:''});
    const navigate = useNavigate();
    

    const vaildateEmail = (email) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const vaildateInput = () => {
        const newErrors = {username:'', password:'', email:''};
        if (step === 1 && !registInfo.username){
            newErrors.username = '아이디를 입력해주세요.'
        }
        if (step === 2 && !registInfo.password){
            newErrors.password = '비밀번호를 입력해주세요.'
        }
        if (step === 3){
            if(!registInfo.email){
                newErrors.email = '이메일을 입력해주세요.'
            }else if(!vaildateEmail(registInfo.email)){
                newErrors.email = '올바른 이메일 형식이 아닙니다.'
            }
        }
        setErrors(newErrors);
        return !Object.values(newErrors).some((error) => error);
    };
    const nextStep = () => {
        if (vaildateInput()){
            setStep(step + 1);
        }
    };

      // 회원가입 함수
      const completeSignup = async () => {
        if (vaildateInput()) {

            try {
                // 회원가입 API 호출
                const response = await RegisterAPI(registInfo);
                alert('회원가입이 완료되었습니다.');
                navigate('/login');
            } catch (error) {
                setErrors({...errors, email: error.message});
            }
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
             

                <Titlestyled>이름 입력</Titlestyled>
            <ExplainStyled>이름을 입력하세요.</ExplainStyled>
            <InputStyled placeholder='이름' onChange={handleChange}   name="username"/>
            {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
            <LoginBtn onClick={nextStep}>다음</LoginBtn>
        </LoginCenterItem>
        )}
            {step === 2 && (
                      <LoginCenterItem>

            

                <Titlestyled>비밀번호 입력</Titlestyled>
            <ExplainStyled>비밀번호를 입력하세요.</ExplainStyled>
            <InputStyled placeholder='비밀번호' type='password' onChange={handleChange}   name="password"/>
              {errors.password &&<ErrorMessage>{errors.password}</ErrorMessage>}
            <LoginBtn onClick={nextStep}>다음</LoginBtn>
                      </LoginCenterItem>
        )}
            {step  === 3 && (
                      <LoginCenterItem>

      
                <Titlestyled>이메일 입력</Titlestyled>
            <ExplainStyled>이메일를 입력하세요.</ExplainStyled>
            <InputStyled placeholder='이메일' value={registInfo.email} onChange={handleChange}   name="email"/>
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            <LoginBtn onClick={completeSignup}>확인</LoginBtn>
                      </LoginCenterItem>
        )}
        </WrapperSignup>
    );
};
export default Signup;