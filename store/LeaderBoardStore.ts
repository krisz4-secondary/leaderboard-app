import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../types";

interface LeaderboardState {
  data: User[];
  setData: (value: User[]) => void;
  filterText: string;
  setFilterText: (text: string) => void;
  initStore: () => void;
}

export const useLeaderboardStore = create(
  persist<LeaderboardState>(
    (set) => ({
      data: [],
      setData: (value: User[]) => set({ data: value }),
      filterText: "",
      setFilterText: (text: string) => set({ filterText: text }),

      initStore: () =>
        set({
          data: [],
          filterText: "",
        }),
    }),
    {
      name: "leaderboard-store",
      getStorage: () => AsyncStorage,
      /* @ts-ignore */
      partialize: (state) => ({ data: state.data }),
    }
  )
);
