import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import LoginOption from './pages/loginOption';
import Main from './pages/main';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginOption />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
