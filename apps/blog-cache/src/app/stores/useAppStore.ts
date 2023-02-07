import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { MainRoute } from "../routes/main-router";

export type AppState = {
  selectedMenuItem: MainRoute;

  setSelectedMenuItem: (menuItem: MainRoute) => void;
}

export const useAppStore = create(devtools<AppState>(set => ({
  selectedMenuItem: MainRoute.home,

  setSelectedMenuItem: (menuItem: MainRoute) => set({ selectedMenuItem: menuItem })
}), {
  name: '[BLOG] App State',
  enabled: process.env.NODE_ENV === 'development'
}));