import { create } from "zustand";

interface BearState {
    uName: string;
    password: string;
    uId:number;
    id:number
    setUName: (uName: string) => void;
    setPassword: (password: string) => void;
    setUId: (uId: number) => void;
    setId: (id: number) => void;
  }

const useBearStore = create<BearState>((set) => ({
    uName: '',
    password: '',
    uId: 0,
    id: 0,
    setUName: (uname: string) => set({ uName: uname }), 
    setPassword: (password1: string) => set({ password: password1 }),
    setUId: (uid: number) => set({uId: uid}),
    setId: (ID: number) => set({id: ID})
  }))

export default useBearStore