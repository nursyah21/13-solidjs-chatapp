import { createWithSignal } from "solid-zustand";

interface BearState {
  bears: number;
  increase: () => void;
}

export const useStore = createWithSignal<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));
