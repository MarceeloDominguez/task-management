import axios from "axios";
import { create } from "zustand";

interface ISubTaskValue {
  description: string;
  done: boolean;
}

type State = {
  subTasks: ISubTaskValue[];
  isLoading: boolean;
};

type Action = {
  getSubTasksById: (id: string) => void;
  addSubTasks: () => void;
};

export const useSubTasksStore = create<State & Action>((set) => ({
  subTasks: [],
  isLoading: true,

  addSubTasks: async () => {
    try {
      set({ isLoading: true });
      const { data } = await axios.post("http://10.0.2.2:5000/api/subtasks/");
      set((state) => ({ subTasks: [...state.subTasks, data] }));
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },

  getSubTasksById: async (id: string) => {
    try {
      set({ isLoading: true });
      const { data } = await axios.get(
        `http://10.0.2.2:5000/api/tasks/${id}/subtasks/`
      );
      set({ subTasks: data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
