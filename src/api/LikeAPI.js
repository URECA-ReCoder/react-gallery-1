import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

//좋아요 추가/취소 API 요청
//좋아요를 한번 더 누르면(같은 postId에 대해 요청을 한번 더 하면) 좋아요 취소
//하나의 함수로 상태를 번갈아가며 전환함 => toggle
const toggleLikePost = async ({ missionId, token }) => {
  const response = await axios.post(`${apiUrl}/mission/${missionId}/like`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useToggleLikePost = () => {
  return useMutation({
    mutationFn: toggleLikePost,
  });
}
