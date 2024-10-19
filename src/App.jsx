import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import LoginOption from './pages/loginOption';
import Main from './pages/main';
import Login from './pages/login';
import Signup from './pages/signup';
import Search from './pages/search';
import KakaoLogin from './pages/kakaoLogin';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<LoginOption />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/main" element={<Main />} />
            <Route path="/kakaoLogin" element={<KakaoLogin />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
