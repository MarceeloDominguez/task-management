import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import FlotingButton from "../ui/FlotingButton";
import { LayoutBottomSheetModal } from "../ui/LayoutBottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomTextInput from "../ui/CustomTextInput";
import LabelTextInput from "../ui/LabelTextInput";
import CustomButton from "../ui/CustomButton";
import { useSubTasksStore } from "../../store/subTasksStore";

type Props = {
  id: string;
};

export default function OpenFormSubTasks({ id }: Props) {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [descriptionSubTask, setDescriptionSubTask] = useState("");
  const { addSubTasks, isLoading } = useSubTasksStore();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    if (!bottomSheetVisible) {
      setDescriptionSubTask("");
    }
  }, [bottomSheetVisible]);

  const handlePresentBottomSheet = () => {
    bottomSheetRef.current?.present();
    setBottomSheetVisible(true);
  };
  const handleDismissBottomSheet = () => {
    bottomSheetRef.current?.dismiss();
    setBottomSheetVisible(false);
  };

  const handleFormSubmit = () => {
    if (!descriptionSubTask) return;

    addSubTasks({
      description: descriptionSubTask,
      done: false,
      taskId: id,
    });

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
            buttonTitle="Agregar"
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
