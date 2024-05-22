import { create } from "zustand";

interface BearState {
    id:number
    conform: boolean;
    setId: (id: number) => void;
    setConform: (conform: boolean) => void;
  }

const useBearStore = create<BearState>((set) => ({
    id: 0,
    conform: false,
    setId: (ID: number) => set({id: ID}),
    setConform: (conform1: boolean) => set({conform: conform1}),
  }))

export default useBearStore