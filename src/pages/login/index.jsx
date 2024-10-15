import { Footer } from "../../components/common/commonUI";
import { ButtonStyled,LogoContainer, NoLogin,CenterItems } from "./index.styles";
import instagram from '../../assets/icons/instagram.png';
import user from '../../assets/icons/user.png';
const Login = () => {
    return (
        <WrapperStyle>
            <CenterItems>
        <LogoContainer >
            <img src={instagram}/>
        </LogoContainer>
        <NoLogin>
            <img src={user}/>
            <div style={{color:'black'}}>로그인 없이 이용하기</div>
        </NoLogin>
        <ButtonStyled>다른 계정으로 로그인</ButtonStyled>
            </CenterItems>
        <Footer/>
        </WrapperStyle>
    );
};
export default Login;
