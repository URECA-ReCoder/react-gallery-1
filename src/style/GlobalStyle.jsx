import {createGlobalStyle} from 'style-components';
import './font.css';
import 'normalize.css';//브라우저간의 차이 없애기 위해

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        box-sizing: border-box;
        font-family: 'Pretendard';
    }
    html, body{
        margin: 0;
        padding: 0;
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