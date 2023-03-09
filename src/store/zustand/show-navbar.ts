import { create } from "zustand";

interface IStoreShowNavbar {
  isTransition: boolean;
  setIsTransitionTrue: () => void;
  setIsTransitionFalse: () => void;
}

export const useStoreShowNavbar = create<IStoreShowNavbar>((set) => ({
  isTransition: true,
  setIsTransitionTrue: () => {
    console.log('setIsTransitionTrue is run...')
    set({ isTransition: true });
  },
  setIsTransitionFalse: () => {
    console.log('setIsTransitionFalse is run...')
    set({ isTransition: false });
  },
}));
