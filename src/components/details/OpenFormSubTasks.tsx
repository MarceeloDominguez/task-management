import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import FlotingButton from "../ui/FlotingButton";
import { LayoutBottomSheetModal } from "../ui/LayoutBottomSheetModal";
import CustomTextInput from "../ui/CustomTextInput";
import LabelTextInput from "../ui/LabelTextInput";
import CustomButton from "../ui/CustomButton";
import { useSubTasksStore } from "../../store/subTasksStore";
import { useContextSubTask } from "../../context/contextSubTasks";

type Props = {
  id: string;
};

export default function OpenFormSubTasks({ id }: Props) {
  const [descriptionSubTask, setDescriptionSubTask] = useState("");
  const { addSubTasks, editSubTask, isLoading } = useSubTasksStore();
  const {
    bottomSheetVisible,
    handleDismissBottomSheet,
    handlePresentBottomSheet,
    bottomSheetRef,
    subTaskToEdit,
    idSubTask,
  } = useContextSubTask();

  useEffect(() => {
    if (subTaskToEdit !== null) {
      setDescriptionSubTask(subTaskToEdit.description);
    }
  }, [subTaskToEdit]);

  useEffect(() => {
    if (!bottomSheetVisible) {
      setDescriptionSubTask("");
    }
  }, [bottomSheetVisible]);

  const handleFormSubmit = () => {
    if (!descriptionSubTask) return;

    if (subTaskToEdit !== null) {
      editSubTask(idSubTask!, {
        description: descriptionSubTask,
        taskId: subTaskToEdit.taskId,
        done: subTaskToEdit.done,
      });
    } else {
      addSubTasks({
        description: descriptionSubTask,
        done: false,
        taskId: id,
      });
    }

    setDescriptionSubTask("");

    handleDismissBottomSheet();
    bottomSheetRef.current?.dismiss();
  };

  return (
    <>
      <FlotingButton
        title="Agregar sub tareas"
        onPress={handlePresentBottomSheet}
        disabled={isLoading}
      />
      <LayoutBottomSheetModal
        ref={bottomSheetRef}
        onDismiss={handleDismissBottomSheet}
      >
        <View style={styles.container}>
          <LabelTextInput label="SubTarea" />
          <CustomTextInput
            placeholder="Escriba una subtarea"
            value={descriptionSubTask}
            onChangeText={(value) => setDescriptionSubTask(value)}
          />
          <CustomButton
            buttonTitle={subTaskToEdit !== null ? "Editar" : "Agregar"}
            additionalStyles={{ marginTop: 40 }}
            onPress={handleFormSubmit}
          />
        </View>
      </LayoutBottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    paddingTop: 10,
  },
});
