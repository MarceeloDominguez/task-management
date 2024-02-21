import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Date,
  Description,
  Progress,
  ShapeCard,
  SubTasks,
  Title,
} from "../../components/details";
import { useNavigation } from "@react-navigation/native";
import { RootMainStackParamsList, UseNavigation } from "../../navigation/type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLORS } from "../../constants/colors";
import OpenFormSubTasks from "../../components/details/OpenFormSubTasks";
import { useTasksStore } from "../../store/tasksStore";
import { useSubTasksStore } from "../../store/subTasksStore";
import { ISubTask } from "../../interface/subtask";

type Props = NativeStackScreenProps<RootMainStackParamsList, "DetailsScreen">;

export const DetailsScreen = ({ route }: Props) => {
  const { backgroundColor, item } = route.params;
  const { title, description, startDate, finalDate, id } = item;
  const navigation = useNavigation<UseNavigation>();
  const { editTask } = useTasksStore();
  const {
    editSubTask,
    subTasks,
    isLoading: loadingSubTasks,
  } = useSubTasksStore();
  const [percentage, setPercentage] = useState<number | string>(0);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor },
    });
  }, []);

  useEffect(() => {
    const doneCount = subTasks.filter((item) => item.done).length;
    const totalTasks = subTasks.length;
    const newPercentage =
      !item.done || subTasks.length > 0 ? (doneCount / totalTasks) * 100 : 100;
    setPercentage(isNaN(newPercentage) ? "0" : newPercentage);

    if (!loadingSubTasks) {
      editTask(item.id, {
        ...item,
        percentageTaskCompleted: isNaN(newPercentage)
          ? "0"
          : newPercentage.toString().split(".")[0],
      });
    }
  }, [subTasks, loadingSubTasks, item.done]);

  const handleToggleCompleteAndSave = (clickedSubTask: ISubTask) => {
    const newSubTaskCompleted = !clickedSubTask.done;
    sendToBackend(newSubTaskCompleted, clickedSubTask);
  };

  const sendToBackend = (
    newSubTaskCompleted: boolean,
    clickedSubTask: ISubTask
  ) => {
    editSubTask(clickedSubTask.id!, {
      ...clickedSubTask,
      done: newSubTaskCompleted,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.contentCard, { backgroundColor }]}>
          <Title title={title} />
          <Date startDate={startDate} finalDate={finalDate} />
          <ShapeCard backgroundColor={backgroundColor} />
        </View>
        <View style={styles.contentScreen}>
          <Description description={description} />
          <Progress
            backgroundColor={backgroundColor}
            done={item.done}
            percentage={Number(percentage)}
          />
          <SubTasks
            id={id}
            handleToggleCompleteAndSave={handleToggleCompleteAndSave}
          />
        </View>
      </ScrollView>
      <OpenFormSubTasks id={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY[1],
  },
  contentCard: {
    paddingHorizontal: 16,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    overflow: "hidden",
    elevation: 10,
  },
  contentScreen: {
    paddingHorizontal: 16,
  },
});
