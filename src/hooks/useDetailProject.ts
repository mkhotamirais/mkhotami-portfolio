import { create } from "zustand";

export type DetailProject = {
  open: boolean;
  setOpen: (open: boolean) => void;
  setClose: () => void;
};

export const useDetailProject = create<DetailProject>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
  setClose: () => set({ open: false }),
}));
