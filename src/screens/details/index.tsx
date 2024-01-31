import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, ScrollView, Text, Button } from "react-native";
import {
  Date,
  Description,
  Progress,
  ShapeCard,
  SubTasks,
  Title,
} from "../../components/details";
import FlotingButton from "../../components/ui/FlotingButton";
import { useNavigation } from "@react-navigation/native";
import { RootMainStackParamsList, UseNavigation } from "../../navigation/type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLORS } from "../../constants/colors";
import { CustomBottomSheet } from "../../components/ui/CustomBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useTasksStore } from "../../store/tasksStore";
import { useContextProvider } from "../../context/contextProvider";
import Loading from "../../components/ui/Loading";

type Props = NativeStackScreenProps<RootMainStackParamsList, "DetailsScreen">;

export const DetailsScreen = ({ route }: Props) => {
  const { backgroundColor, item } = route.params;
  const { title, description, startDate, finalDate } = item;
  const navigation = useNavigation<UseNavigation>();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { editTask, isLoading } = useTasksStore();
  const { taskToEdit } = useContextProvider();
  const { setTaskCompleted, taskCompleted } = useContextProvider();
  const [subTask, setSubTask] = useState([
    { subtask: "Hola" },
    { subtask: "Hola" },
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor },
    });
  }, []);

  useEffect(() => {
    if (taskToEdit !== null) {
      setTaskCompleted(taskToEdit.done);
    }
  }, [taskToEdit]);

  const handlePresentModalPress = () => bottomSheetRef.current?.present();
  //const handleDismissModalPress = () => bottomSheetRef.current?.dismiss();

  const handleToggleCompletedAndSave = () => {
    const newTaskCompleted = !taskCompleted;
    setTaskCompleted(newTaskCompleted);
    sendToBackend(newTaskCompleted);
  };

  const sendToBackend = (newTaskCompleted: boolean) => {
    console.log(newTaskCompleted, "en la funcion sendToBackeend");

    editTask(item.id, {
      ...item,
      done: newTaskCompleted,
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
          <Progress backgroundColor={backgroundColor} />
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {subTask.length === 0 ? (
                <Button
                  title={
                    taskCompleted ? "Tarea Completada" : "Tarea No Completada"
                  }
                  onPress={handleToggleCompletedAndSave}
                />
              ) : (
                <SubTasks handlePresentModalPress={handlePresentModalPress} />
              )}
            </>
          )}
        </View>
      </ScrollView>
      <FlotingButton
        title="Agregar sub tareas"
        onPress={() => console.log("sub taskss")}
      />
      <CustomBottomSheet ref={bottomSheetRef}>
        <Text>Hola desde detalles</Text>
      </CustomBottomSheet>
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
