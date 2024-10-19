import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

// 사용자 정보 조회 API
export const fetchUserInfo = async (accessToken) => {
  const response = await axios.get(`${apiUrl}/auth/profile`,  {
    headers: {
      Authorization: `Bearer ${accessToken}`, // Bearer 추가
    },
  });
  return response.data;
};

// 사용자 정보를 불러오는 react-query 훅
export const useUserInfo = (accessToken) => {
  return useQuery({
    queryKey: ['user', accessToken],
    queryFn: () => fetchUserInfo(accessToken),
    enabled: !!accessToken, //refreshToken이 있을 때만 요청
  });
};
