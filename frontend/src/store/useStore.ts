// frontend/src/store/useStore.ts
import create from 'zustand';

interface Store {
  user: null | {
    id: string;
    name: string;
  };
  setUser: (user: any) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));