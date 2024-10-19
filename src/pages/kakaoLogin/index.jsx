import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '@src/hooks/useAuth'; // Zustand 스토어 불러오기
const apiKey = import.meta.env.VITE_REST_API_KEY;
import { fetchUserInfo } from '@src/api/ProfileAPI';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // 로그인 상태 저장 함수 불러오기

  useEffect(() => {
    const fetchToken = async () => {
      // URL에서 인가 코드 추출
      const params = new URLSearchParams(window.location.search);
      const accessToken = params.get('access_token');
      const refreshToken = params.get('refresh_token');

      if (accessToken) {
        //zustand의 미들웨어를 사용해 sessionStorage에 저장
        const user = await fetchUserInfo(accessToken);
        //localStorage.setItem('accessToken', accessToken);
        const token = accessToken;
        login(token, user);
        navigate('/main');
      }
    };

    fetchToken();
  }, [navigate, login]);

  return <div>카카오 로그인 중입니다...</div>;
};

export default KakaoLogin;
