import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { createContext, useContext, useRef, useState } from "react";
import { ISubTask } from "../interface/subtask";
import { useSubTasksStore } from "../store/subTasksStore";

type Props = {
  children: React.ReactNode;
};

interface AppContextSubTask {
  handlePresentBottomSheet: () => void;
  handleDismissBottomSheet: () => void;
  bottomSheetVisible: boolean;
  setBottomSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  getIdSubTask: (id: string) => void;
  subTaskToEdit: ISubTask | null;
  idSubTask: string | null;
}

const GlobalContextSubTask = createContext({} as AppContextSubTask);

export const ContextSubTask = ({ children }: Props) => {
  const [subTaskToEdit, setSubTaskToEdit] = useState<ISubTask | null>(null);
  const [idSubTask, setIdSubTask] = useState<string | null>(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { subTasks } = useSubTasksStore();

  const handleDismissBottomSheet = () => {
    bottomSheetRef.current?.dismiss();
    setBottomSheetVisible(false);
    setIdSubTask(null);
    setSubTaskToEdit(null);
  };

  const handlePresentBottomSheet = () => {
    bottomSheetRef.current?.present();
    setBottomSheetVisible(true);
  };

  const getIdSubTask = (idSubtask: string) => {
    const findSubTaskToEdit = subTasks.find(
      (subtask) => subtask.id === idSubtask
    );
    setIdSubTask(idSubtask!);
    setSubTaskToEdit(findSubTaskToEdit!);
  };

  return (
    <GlobalContextSubTask.Provider
      value={{
        handleDismissBottomSheet,
        handlePresentBottomSheet,
        bottomSheetVisible,
        setBottomSheetVisible,
        bottomSheetRef,
        getIdSubTask,
        subTaskToEdit,
        idSubTask,
      }}
    >
      {children}
    </GlobalContextSubTask.Provider>
  );
};

export const useContextSubTask = () => {
  const context = useContext(GlobalContextSubTask);

  return context;
};
