import axios from "axios";
import { create } from "zustand";

interface ISubTaskValue {
  description: string;
  done: boolean;
  taskId: string;
  id?: string;
}

type State = {
  subTasks: ISubTaskValue[];
  isLoading: boolean;
  allSubTask: ISubTaskValue[];
};

type Action = {
  getSubTasksById: (id: string) => void;
  addSubTasks: (values: ISubTaskValue) => void;
  deleteSubTask: (id: string) => void;
  editSubTask: (id: string, values: ISubTaskValue) => void;
  getAllSubTasks: () => void;
};

export const useSubTasksStore = create<State & Action>((set) => ({
  subTasks: [],
  isLoading: true,
  allSubTask: [],

  addSubTasks: async (values: ISubTaskValue) => {
    try {
      set({ isLoading: true });
      const { data } = await axios.post(
        "http://10.0.2.2:5000/api/subtasks/",
        values
      );
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

  deleteSubTask: async (id: string) => {
    try {
      set({ isLoading: true });
      await axios.delete(`http://10.0.2.2:5000/api/subtasks/${id}`);
      set((state) => ({
        subTasks: state.subTasks.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },

  editSubTask: async (id: string, values: ISubTaskValue) => {
    try {
      set({ isLoading: true });
      const { data } = await axios.put(
        `http://10.0.2.2:5000/api/subtasks/${id}`,
        values
      );
      set((state) => ({
        subTasks: state.subTasks.map((item) => (item.id === id ? data : item)),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },

  getAllSubTasks: async () => {
    try {
      set({ isLoading: true });
      const { data } = await axios.get("http://10.0.2.2:5000/api/subtasks/");
      set({ allSubTask: data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
