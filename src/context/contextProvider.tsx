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
}

const GlobalContext = createContext({} as AppContextProvider);

export const ContextProvider = ({ children }: Props) => {
  const { tasks } = useTasksStore();
  const [taskToEdit, setTaskToEdit] = useState<ITasks | null>(null);
  const [idTask, setIdTask] = useState<string | null>(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleDismissbottomSheet = () => {
    setBottomSheetVisible(false);
    setIdTask(null);
    setTaskToEdit(null);
    bottomSheetRef.current?.dismiss();
  };

  const handlePresentBottomSheet = () => {
    setBottomSheetVisible(true);
    bottomSheetRef.current?.present();
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
