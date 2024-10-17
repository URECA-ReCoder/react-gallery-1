import {create} from 'zustand';

export const usePageStore = create((set) => ({
  currentPage: '/main',
  setCurrentPage: (page) => set({currentPage: page}),
}));