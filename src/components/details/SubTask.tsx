import React, { useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import TextComponent from "../ui/TextComponent";
import { CustomBottomSheet } from "../ui/CustomBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useSubTasksStore } from "../../store/subTasksStore";

interface ISubTask {
  done: boolean;
  description: string;
  id?: string;
}

type Props = {
  item: ISubTask;
};

export default function SubTask({ item }: Props) {
  const { deleteSubTask } = useSubTasksStore();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = () => bottomSheetRef.current?.present();

  return (
    <View style={styles.containerCardTask}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.contentTask}
        onPress={() => console.log("Click en el item")}
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
        onPress={handlePresentModalPress}
      />
      <CustomBottomSheet ref={bottomSheetRef}>
        <View>
          <Text style={styles.titleBottomSheet}>
            ¿Estás seguro de que deseas eliminar esta subtarea?
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.containerButton}
          onPress={() => deleteSubTask(item.id!)}
        >
          <Text style={styles.titleButton}>Eliminar</Text>
        </TouchableOpacity>
      </CustomBottomSheet>
    </View>
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
