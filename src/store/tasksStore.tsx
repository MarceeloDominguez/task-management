import { create } from "zustand";
import { ITasks } from "../interface/tasks";
import axios from "axios";

type State = {
  tasks: ITasks[];
};

type Action = {
  getAllTasks: () => void;
  addTasks: () => void;
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
  addTasks: () => {},
}));
