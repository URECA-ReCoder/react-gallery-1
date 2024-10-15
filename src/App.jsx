import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createGlobalStyle} from 'style-components';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle/>
    <App/>
    </>
  )
}

export default App
const GlobalStyle = createGlobalStyle`
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css");
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
    background-color: #f0f0f0;
  }
`