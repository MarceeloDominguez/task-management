import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import TextComponent from "../ui/TextComponent";
import { COLORS } from "../../constants/colors";
import { useSubTasksStore } from "../../store/subTasksStore";
import SubTask from "./SubTask";

type Props = {
  handlePresentModalPress: () => void;
  id: string;
};

export const SubTasks = ({ handlePresentModalPress, id }: Props) => {
  const { getSubTasksById, subTasks } = useSubTasksStore();

  useEffect(() => {
    getSubTasksById(id);
  }, []);

  return (
    <View style={styles.container}>
      <TextComponent
        text="Sub tareas"
        fontSize={16}
        color={COLORS.TEXT_COLOR[1]}
        fontFamily="PoppinsSemiBold"
      />
      {subTasks.map((item, index) => (
        <SubTask
          key={index}
          item={item}
          handlePresentModalPress={handlePresentModalPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 80,
    flex: 1,
  },
});
