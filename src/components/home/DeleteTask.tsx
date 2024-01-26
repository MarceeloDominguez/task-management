import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/colors";
import { Feather } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { CustomBottomSheet } from "../ui/CustomBottomSheet";
import { useTasksStore } from "../../store/tasksStore";

const size_container_icon = 30;

type Props = {
  id: string;
};

export default function DeleteTask({ id }: Props) {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { deleteTask } = useTasksStore();

  const handlePresentBottomSheet = () => bottomSheetRef.current?.present();

  return (
    <View>
      <TouchableOpacity
        style={styles.containerIcon}
        activeOpacity={0.8}
        onPress={handlePresentBottomSheet}
      >
        <Feather name="trash-2" size={16} color={COLORS.TEXT_COLOR[1]} />
      </TouchableOpacity>
      <CustomBottomSheet ref={bottomSheetRef}>
        <View>
          <Text style={styles.titleBottomSheet}>
            ¿Estás seguro de que deseas eliminar esta tarea?
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.containerButton}
          onPress={() => deleteTask(id)}
        >
          <Text style={styles.titleButton}>Eliminar</Text>
        </TouchableOpacity>
      </CustomBottomSheet>
    </View>
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
  titleBottomSheet: {
    color: COLORS.TEXT_COLOR[1],
    fontFamily: "PoppinsBold",
    fontSize: 13,
    marginVertical: 10,
  },
  containerButton: {
    backgroundColor: "#cf092a",
    height: 40,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 5,
  },
  titleButton: {
    color: COLORS.TEXT_COLOR[1],
    fontFamily: "PoppinsSemiBold",
    fontSize: 12,
    letterSpacing: 0.3,
  },
});
