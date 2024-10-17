import axios from 'axios';

const apiKey = import.meta.env.VITE_REST_API_KEY; // Vite 환경 변수 (접두어: VITE_)
const redirect = import.meta.env.VITE_REDIRECT_URI;

// link를 export
export const kakaoLink = `https://kauth.kakao.com/oauth/authorize?client_id=${apiKey}&redirect_uri=${redirect}&response_type=code`;

// 필요할 경우 KakaoAPI 함수도 정의
export const KakaoAPI = async () => {
  try {
    const response = await axios.get(kakaoLink); // API 호출 예시
    return response.data;
  } catch (error) {
    console.error('Kakao API 호출 오류:', error);
  }
};
