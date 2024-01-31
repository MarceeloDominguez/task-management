import React, { createContext, useContext, useRef, useState } from "react";
import { useTasksStore } from "../store/tasksStore";
import { ITasks } from "../interface/tasks";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

type Props = {
  children: React.ReactNode;
};

interface AppContextProvider {
  getIdTask: (idTask: string) => void;
  taskToEdit: ITasks | null;
  idTask: string | null;
  bottomSheetVisible: boolean;
  setBottomSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handlePresentBottomSheet: () => void;
  handleDismissbottomSheet: () => void;
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  setTaskCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  taskCompleted: boolean;
}

const GlobalContext = createContext({} as AppContextProvider);

export const ContextProvider = ({ children }: Props) => {
  const { tasks } = useTasksStore();
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<ITasks | null>(null);
  const [idTask, setIdTask] = useState<string | null>(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  console.log(taskCompleted, "en el context");

  const handleDismissbottomSheet = () => {
    bottomSheetRef.current?.dismiss();
    setBottomSheetVisible(false);
    setIdTask(null);
    setTaskToEdit(null);
  };

  const handlePresentBottomSheet = () => {
    bottomSheetRef.current?.present();
    setBottomSheetVisible(true);
  };

  const getIdTask = (idTask: string) => {
    const findTaslToEdit = tasks.find((task) => task.id === idTask);
    setIdTask(idTask);
    setTaskToEdit(findTaslToEdit!);
  };

  return (
    <GlobalContext.Provider
      value={{
        getIdTask,
        taskToEdit,
        idTask,
        bottomSheetVisible,
        setBottomSheetVisible,
        handlePresentBottomSheet,
        handleDismissbottomSheet,
        bottomSheetRef,
        setTaskCompleted,
        taskCompleted,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useContextProvider = () => {
  const context = useContext(GlobalContext);

  return context;
};
