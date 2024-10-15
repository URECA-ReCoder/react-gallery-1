import { createGlobalStyle } from 'styled-components';
import './font.css';
import 'normalize.css'; // 브라우저 간의 차이 없애기 위해

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        :focus{
            outline: none;
        }
    }
    body,html{
        width: 100vh;
        height: 100vh;
        display: flex;
        font-family: 'Pretendard', sans-serif;  // 대체 폰트 추가
        background-color: #e8e8e8;
        justify-content: center;
        align-items: center;
    }
    a{
        outline: none;
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    button{
        border: none;
        cursor: pointer;
        background: none;
    }
`;

export default GlobalStyle;
