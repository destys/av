"use client";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  jwtToken:
    typeof localStorage !== "undefined"
      ? localStorage.getItem("jwtToken")
      : null,
  login: (token) => {
    set({ jwtToken: token });
    localStorage.setItem("jwtToken", token);
  },
  logout: () => {
    set({ jwtToken: null });
    localStorage.removeItem("jwtToken");
  },
}));

export default useAuthStore;
