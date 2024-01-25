import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { LayoutBottomSheetModal } from "../ui/LayoutBottomSheetModal";
import { Form } from "./Form";
import { useContextProvider } from "../../context/contextProvider";

const size_container_icon = 30;

type Props = {
  id: string;
};

export default function EditTaks({ id }: Props) {
  const {
    getIdTask,
    handlePresentBottomSheet,
    handleDismissbottomSheet,
    bottomSheetRef,
  } = useContextProvider();

  const handleTaskIdToEdit = (id: string) => {
    getIdTask(id);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.containerIcon}
        activeOpacity={0.8}
        onPress={() => {
          handlePresentBottomSheet();
          handleTaskIdToEdit(id);
        }}
      >
        <Feather name="edit" size={16} color={COLORS.TEXT_COLOR[1]} />
      </TouchableOpacity>
      <LayoutBottomSheetModal ref={bottomSheetRef}>
        <Form handleDismissbottomSheet={handleDismissbottomSheet} />
      </LayoutBottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  containerIcon: {
    backgroundColor: "rgba(60, 60, 60, 0.5)",
    width: size_container_icon,
    height: size_container_icon,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: size_container_icon / 2,
  },
});
