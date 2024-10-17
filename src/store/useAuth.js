import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuth = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      authType: null,

      login: (user, token, authType) => {
        set({
          user,
          token,
          isAuthenticated: true,
          authType,
        });
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false, authType: null });
        sessionStorage.removeItem('token');
      },
    }),
    {
      name: 'auth-storage',
      getStorage: () => sessionStorage,
    }
  )
);

export default useAuth;
