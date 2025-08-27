import { create } from "zustand";

const useMoodStore = create((set) => ({
  moods: [],

  loadMoods: () => {
    const saved = localStorage.getItem("moods");
    if (saved) {
      set({ moods: JSON.parse(saved) });
    }
  },

  addMood: (mood) =>
    set((state) => {
      const newMoods = [...state.moods, { id: Date.now().toString(), ...mood }];
      localStorage.setItem("moods", JSON.stringify(newMoods));
      return { moods: newMoods };
    }),

  updateMood: (id, updated) =>
    set((state) => {
      const newMoods = state.moods.map((m) =>
        m.id === id ? { ...m, ...updated } : m
      );
      localStorage.setItem("moods", JSON.stringify(newMoods));
      return { moods: newMoods };
    }),

  deleteMood: (id) =>
    set((state) => {
      const newMoods = state.moods.filter((m) => m.id !== id);
      localStorage.setItem("moods", JSON.stringify(newMoods));
      return { moods: newMoods };
    }),
}));

export default useMoodStore;
