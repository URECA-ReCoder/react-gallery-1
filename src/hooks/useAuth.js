//zustand로 전역 관리하기
import create from 'zustand';
import { persist } from 'zustand/middleware';//미들 웨어

const useAuth = create(
    persist(
        (set) => ({
            user: null,
            token: null,
            isAuthenticated: false, //로그인 여부

            //로그인 상태 설정
            login: (token, user) => {
                set({
                    token,
                    user,
                    isAuthenticated: true,
                });
            },

            logout: () => {
                set({
                    token: null,
                    user: null,
                    isAuthenticated: false,
                });
            },
        }),
        {
            name: 'auth-storage',
            getStorage: () => sessionStorage,
        }
    )
);
export default useAuth;