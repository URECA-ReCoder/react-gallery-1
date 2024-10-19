import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const LoginAPI = async (userInfo) => {
    try {
        const response = await axios.post(`${apiUrl}/auth/login`, userInfo);
        const token = response.data.accessToken;
        return token; // 로그인 성공 시 accessToken 데이터 반환
      } catch (error) {
        if (error.response && error.response.status === 401){
            throw error; // 오류 발생 시 예외를 던져서 처리
        }
      }
}