import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../hooks/useAuth'; // Zustand 스토어 불러오기
const apiKey = import.meta.env.VITE_REST_API_KEY;
const KakaoLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // 로그인 상태 저장 함수 불러오기

  useEffect(() => {
    const fetchToken = async () => {
      // URL에서 인가 코드 추출
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      if (code) {
        try {
          // 백엔드에 인가 코드를 보내고 JWT 토큰을 받음
          const response = await axios.post(`${apiKey}/auth/kakao`, { code });

          const { token, user } = response.data;

          login(token, user);

          // JWT 토큰을 sessionStorage에 저장하여 새로고침 시 유지
          sessionStorage.setItem('token', token);

          // 메인 페이지로 이동
          navigate('/main');
        } catch (error) {
          console.error('카카오 로그인 실패:', error);
          alert('로그인에 실패했습니다.');
          navigate('/login');
        }
      } else {
        alert('카카오 로그인에 실패했습니다.');
        navigate('/login');
      }
    };

    fetchToken();
  }, [navigate, login]);

  return <div>카카오 로그인 중입니다...</div>;
};

export default KakaoLogin;
