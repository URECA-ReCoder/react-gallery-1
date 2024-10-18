import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
const apiUrl = import.meta.env.VITE_API_URL;

const fetchMission = async (missionId) => {
  const response = await axios.get(`${apiUrl}/missions/${missionId}`);
  return response.data;
}

export const useMission = () => {
  return useQuery(['mission', missionId], () => fetchMission(missionId), {
    enabled: !!missionId,
  });
};