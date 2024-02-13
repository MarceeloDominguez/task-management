import React, { useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import FlotingButton from "../ui/FlotingButton";
import { LayoutBottomSheetModal } from "../ui/LayoutBottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomTextInput from "../ui/CustomTextInput";
import LabelTextInput from "../ui/LabelTextInput";
import CustomButton from "../ui/CustomButton";

export default function OpenFormSubTasks() {
  const [descriptionSubTask, setDescriptionSubTask] = useState("");
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const handlePresentBottomSheet = () => bottomSheetRef.current?.present();

  const handleFormSubmit = () => {
    console.log("submit...");
  };

  return (
    <>
      <FlotingButton
        title="Agregar sub tareas"
        onPress={handlePresentBottomSheet}
      />
      <LayoutBottomSheetModal ref={bottomSheetRef}>
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
