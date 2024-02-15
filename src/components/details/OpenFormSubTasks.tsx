import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import FlotingButton from "../ui/FlotingButton";
import { LayoutBottomSheetModal } from "../ui/LayoutBottomSheetModal";
import CustomTextInput from "../ui/CustomTextInput";
import LabelTextInput from "../ui/LabelTextInput";
import CustomButton from "../ui/CustomButton";
import { useSubTasksStore } from "../../store/subTasksStore";
import { useContextSubTask } from "../../context/contextSubTasks";
import { COLORS } from "../../constants/colors";

type Props = {
  id: string;
};

export default function OpenFormSubTasks({ id }: Props) {
  const [descriptionSubTask, setDescriptionSubTask] = useState("");
  const [sent, setSent] = useState(false);
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
      setSent(false);
    }
  }, [bottomSheetVisible]);

  const errors = {
    errorDescriptionSubTask: false,
  };

  if (!descriptionSubTask) {
    errors.errorDescriptionSubTask = true;
  }

  const handleFormSubmit = () => {
    setSent(true);

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
          <LabelTextInput
            label="SubTarea"
            error={errors.errorDescriptionSubTask}
            sent={sent}
          />
          <CustomTextInput
            placeholder="¿Cuál es tu próxima subtarea?"
            value={descriptionSubTask}
            onChangeText={(value) => setDescriptionSubTask(value)}
            additionalStyles={{
              borderWidth: 1,
              borderColor:
                errors.errorDescriptionSubTask && sent
                  ? COLORS.ERROR[1]
                  : "transparent",
            }}
          />
          <CustomButton
            buttonTitle={subTaskToEdit !== null ? "Editar" : "Agregar"}
            additionalStyles={{ marginTop: 10 }}
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
