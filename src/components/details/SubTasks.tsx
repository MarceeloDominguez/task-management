import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import TextComponent from "../ui/TextComponent";
import { COLORS } from "../../constants/colors";
import { useSubTasksStore } from "../../store/subTasksStore";
import SubTask from "./SubTask";
import Loading from "../ui/Loading";
import { compareCompleted } from "../../helpers/compareCompleted";

type Props = {
  id: string;
};

export const SubTasks = ({ id }: Props) => {
  const { getSubTasksById, subTasks, isLoading } = useSubTasksStore();

  useEffect(() => {
    getSubTasksById(id);
  }, []);

  if (isLoading) return <Loading />;

  const sortedSubtasks = [...subTasks].sort(compareCompleted);

  return (
    <View style={styles.container}>
      <TextComponent
        text="Sub tareas"
        fontSize={16}
        color={COLORS.TEXT_COLOR[1]}
        fontFamily="PoppinsSemiBold"
      />
      {sortedSubtasks.map((item, index) => (
        <SubTask key={index} item={item} />
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
