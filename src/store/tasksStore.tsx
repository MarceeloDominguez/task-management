import { create } from "zustand";
import { ITasks } from "../interface/tasks";
import axios from "axios";

interface ITaskValue {
  title: string;
  description: string;
  startDate: string | Date;
  finalDate: string | Date;
  done: boolean;
  percentageTaskCompleted: string;
}

type State = {
  tasks: ITasks[];
  isLoading: boolean;
};

type Action = {
  getAllTasks: () => void;
  addTasks: (values: ITaskValue) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, values: ITaskValue) => void;
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

  editTask: async (id: string, values: ITaskValue) => {
    try {
      set({ isLoading: true });
      const { data } = await axios.put(
        `http://10.0.2.2:5000/api/tasks/${id}`,
        values
      );
      set((state) => ({
        tasks: state.tasks.map((item) => (item.id === id ? data : item)),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
