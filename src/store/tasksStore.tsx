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
};

type Action = {
  getAllTasks: () => void;
  addTasks: (values: ITaskValue) => void;
};

export const useTasksStore = create<State & Action>((set) => ({
  tasks: [],

  getAllTasks: async () => {
    try {
      const { data } = await axios.get("http://10.0.2.2:5000/api/tasks/");
      set({ tasks: data });
    } catch (error) {
      console.log(error);
    }
  },
  addTasks: async (values: ITaskValue) => {
    try {
      const { data } = await axios.post(
        "http://10.0.2.2:5000/api/tasks/",
        values
      );
      set((state) => ({ tasks: [...state.tasks, data] }));
    } catch (error) {
      console.log(error);
    }
  },
}));
