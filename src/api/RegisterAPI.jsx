import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const RegisterAPI = async (userInfo) => {
    try {
        // const response = await axios.post(`${apiUrl}/api/user/register`, userInfo, {
        const response = await axios.post(`${apiUrl}/auth/register`, userInfo);
        return response.data; // 로그인 성공 시 데이터 반환
      } catch (error) {
       // 에러가 409 (이메일 중복)일 경우 처리
       if (error.response && error.response.status === 409) {
        throw new Error('이미 가입된 이메일입니다.');
    }
    // 기타 에러 처리
    throw new Error('회원가입 중 오류가 발생했습니다.');
      }
}; 