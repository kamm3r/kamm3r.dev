import create from 'zustand';
import { persist } from 'zustand/middleware';

interface ViewsState {
  views: number;
  increase: (by: number) => void;
}

export const useViewsStore = create<ViewsState>()(
  persist(
    (set) => ({
      views: 0,
      increase: (by) => set((state) => ({ views: state.views + by })),
    }),
    {
      name: 'views-storage',
      getStorage: () => sessionStorage,
    }
  )
);
