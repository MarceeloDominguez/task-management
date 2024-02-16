import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import TextComponent from "../ui/TextComponent";
import { useSubTasksStore } from "../../store/subTasksStore";
import { ISubTask } from "../../interface/subtask";
import { useContextSubTask } from "../../context/contextSubTasks";

type Props = {
  item: ISubTask;
};

export default function SubTask({ item }: Props) {
  const [subtaskCompleted, setSubtaskCompleted] = useState(item.done);
  const [modalVisible, setModalVisible] = useState(false);
  const { handlePresentBottomSheet, getIdSubTask } = useContextSubTask();
  const { deleteSubTask, editSubTask } = useSubTasksStore();

  const handleToggleCompleteAndSave = () => {
    const newSubTaskCompleted = !subtaskCompleted;
    setSubtaskCompleted(newSubTaskCompleted);
    sendToBackend(newSubTaskCompleted);
  };

  const sendToBackend = (newSubTaskCompleted: boolean) => {
    editSubTask(item.id!, {
      ...item,
      done: newSubTaskCompleted,
    });
  };

  return (
    <>
      <View style={styles.containerCardTask}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.contentTask}
          onPress={() => handleToggleCompleteAndSave()}
        >
          <View
            style={[
              styles.contentIconLeft,
              {
                backgroundColor: item.done ? "#6bc950" : COLORS.PRIMARY[2],
                borderColor: item.done ? "#6bc950" : COLORS.TEXT_COLOR[1],
              },
            ]}
          >
            <Feather
              name={item.done ? "check" : "x"}
              size={16}
              color={item.done ? COLORS.PRIMARY[1] : COLORS.TEXT_COLOR[1]}
            />
          </View>
          <TextComponent
            text={item.description}
            fontSize={12}
            color={COLORS.TEXT_COLOR[1]}
            style={{
              ...styles.subTaskText,
              textDecorationLine: item.done ? "line-through" : "none",
            }}
          />
        </TouchableOpacity>
        <Feather
          name="more-vertical"
          size={20}
          color={COLORS.TEXT_COLOR[1]}
          style={styles.iconRight}
          onPress={() => {
            setModalVisible(true);
            getIdSubTask(item.id!);
          }}
        />
      </View>
      <Modal visible={modalVisible} animationType="fade" transparent>
        <Pressable
          onPress={() => setModalVisible(false)}
          style={styles.containerModal}
        >
          <View style={styles.contentModal}>
            <Text style={styles.titleBottomSheet}>
              ¿Deseas editar o eliminar la subtarea?
            </Text>
            <View style={styles.wrapperButtons}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.containerButton,
                  { backgroundColor: COLORS.SECONDARY[1] },
                ]}
                onPress={() => {
                  handlePresentBottomSheet();
                  setModalVisible(false);
                }}
              >
                <Text style={styles.titleButton}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.containerButton}
                onPress={() => deleteSubTask(item.id!)}
              >
                <Text style={styles.titleButton}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  containerCardTask: {
    backgroundColor: COLORS.PRIMARY[2],
    flexDirection: "row",
    marginBottom: 15,
    height: 44,
    borderRadius: 12,
    paddingLeft: 10,
    gap: 5,
  },
  contentTask: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1,
  },
  contentIconLeft: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  subTaskText: {
    marginBottom: 0,
    flex: 1,
  },
  iconRight: {
    height: "100%",
    textAlignVertical: "center",
    opacity: 0.7,
  },
  titleBottomSheet: {
    color: COLORS.TEXT_COLOR[1],
    fontFamily: "PoppinsBold",
    fontSize: 13,
    marginVertical: 10,
    textAlign: "center",
  },
  wrapperButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 5,
  },
  containerButton: {
    backgroundColor: "#cf092a",
    height: 40,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  titleButton: {
    color: COLORS.TEXT_COLOR[1],
    fontFamily: "PoppinsSemiBold",
    fontSize: 12,
    letterSpacing: 0.3,
  },
  containerModal: {
    backgroundColor: "rgba(0,0,0,0.8)",
    flex: 1,
    justifyContent: "center",
  },
  contentModal: {
    backgroundColor: COLORS.PRIMARY[1],
    marginHorizontal: 16,
    padding: 10,
    borderRadius: 10,
  },
});
