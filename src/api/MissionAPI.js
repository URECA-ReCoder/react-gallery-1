import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const fetchMissions = async () => {
  const response = await axios.get(`${apiUrl}missions`);
  return response.data;
}

export const useMissions = () => {
  return useQuery({
    queryKey: ['missions'],  // queryKey는 배열로 전달
    queryFn: fetchMissions   // queryFn에 fetch 함수 전달
  });
};