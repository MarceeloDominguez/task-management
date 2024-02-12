import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/colors";
import { useContextProvider } from "../../context/contextProvider";

type Props = {
  handleToggleCompletedAndSave: () => void;
  taskCompleted: boolean;
};

export default function CompletedTask({
  handleToggleCompletedAndSave,
  taskCompleted,
}: Props) {
  const { taskToEdit } = useContextProvider();

  return (
    <>
      {taskToEdit !== null ? (
        <TouchableOpacity
          onPress={handleToggleCompletedAndSave}
          style={styles.container}
        >
          <View
            style={[
              styles.wrapperCheckBox,
              {
                borderColor: taskCompleted
                  ? COLORS.SECONDARY[1]
                  : COLORS.TEXT_COLOR[1],
              },
            ]}
          >
            <View
              style={[
                styles.checkBox,
                {
                  backgroundColor: taskCompleted
                    ? COLORS.SECONDARY[1]
                    : COLORS.TEXT_COLOR[1],
                },
              ]}
            />
          </View>
          <Text style={styles.textCheckBox}>
            {taskCompleted ? "Tarea completa" : "Tarea Incompleta"}
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.spaceBottom} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "flex-end",
  },
  wrapperCheckBox: {
    width: 15,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15 / 2,
    borderWidth: 1,
  },
  checkBox: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
  },
  textCheckBox: {
    fontFamily: "PoppinsSemiBold",
    color: COLORS.TEXT_COLOR[1],
    fontSize: 12,
    top: 1,
  },
  spaceBottom: {
    height: 45,
  },
});
