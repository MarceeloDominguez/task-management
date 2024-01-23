import { create } from "zustand";
import { ITasks } from "../interface/tasks";
import axios from "axios";

interface ITaskValue {
  title: string;
  description: string;
  startDate: string;
  finalDate: string;
  done: boolean;
}

type State = {
  tasks: ITasks[];
  isLoading: boolean;
};

type Action = {
  getAllTasks: () => void;
  addTasks: (values: ITaskValue) => void;
  deleteTask: (id: string) => void;
};

export const useTasksStore = create<State & Action>((set) => ({
  tasks: [],
  isLoading: true,

  getAllTasks: async () => {
    try {
      set({ isLoading: true });
      const { data } = await axios.get("http://10.0.2.2:5000/api/tasks/");
      set({ tasks: data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },

  addTasks: async (values: ITaskValue) => {
    try {
      set({ isLoading: true });
      const { data } = await axios.post(
        "http://10.0.2.2:5000/api/tasks/",
        values
      );
      set((state) => ({ tasks: [...state.tasks, data] }));
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },

  deleteTask: async (id: string) => {
    try {
      set({ isLoading: true });
      await axios.delete(`http://10.0.2.2:5000/api/tasks/${id}`);
      set((state) => ({ tasks: state.tasks.filter((item) => item.id !== id) }));
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
