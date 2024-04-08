import { create } from "zustand";

interface BearState {
    uName: string;
    password: string;
    setUName: (uName: string) => void;
    setPassword: (password: string) => void;
  }

const useBearStore = create<BearState>((set) => ({
    uName: '',
    password: '',
    setUName: (uname: any) => set({ uName: uname }), 
    setPassword: (password1: any) => set({ password: password1 }),
  }))

export default useBearStore