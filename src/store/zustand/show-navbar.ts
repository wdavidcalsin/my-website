import { create } from "zustand";

interface IStoreShowNavbar {
  isTransition: boolean;
  setIsTransitionTrue: () => void;
  setIsTransitionFalse: () => void;
}

export const useStoreShowNavbar = create<IStoreShowNavbar>((set) => ({
  isTransition: true,
  setIsTransitionTrue: () => {
    set({ isTransition: true });
  },
  setIsTransitionFalse: () => {
    set({ isTransition: false });
  },
}));
