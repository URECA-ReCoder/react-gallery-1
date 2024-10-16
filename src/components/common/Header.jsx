import styled from "styled-components";
import back from '../../assets/icons/back.png';
import { useNavigate } from "react-router-dom";
const HeaderStyle = styled.div`
    padding: 20px 15px;
    display: flex;
    width: 100%;
    justify-content: flex-start; /* 가로 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
    img{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`;

const Header = () =>{
    const navigate = useNavigate();
    return(
        <HeaderStyle>
            <img src={back} onClick={() => navigate(-1)}/>
        </HeaderStyle>
    );
};
export default Header;