import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // 상태를 sessionStorage에 저장하는 미들웨어

const useAuth = create(
  persist(
    (set) => ({
      user: null, // 사용자 정보 (username 등)
      token: null, // JWT 토큰
      isAuthenticated: false, // 로그인 여부

      // 로그인 상태 설정 함수
      login: (token, user) => {
        set({
          token, // 토큰 저장
          user, // 사용자 정보 저장 (예: username)
          isAuthenticated: true, // 로그인 상태로 설정
        });
      },
    }),
    {
      name: 'auth-storage', // sessionStorage에 저장할 키
      getStorage: () => sessionStorage, // sessionStorage에 상태 저장
    }
  )
);

export default useAuth;
