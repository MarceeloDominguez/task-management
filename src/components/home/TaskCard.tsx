import React, { useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import TextComponent from "../ui/TextComponent";
import { COLORS } from "../../constants/colors";
import { Feather } from "@expo/vector-icons";
import ProgressBarItemCard from "./ProgressBarItemCard";
import { useNavigation } from "@react-navigation/native";
import { UseNavigation } from "../../navigation/type";
import { useTasksStore } from "../../store/tasksStore";
import { CustomBottomSheet } from "../ui/CustomBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ITasks } from "../../interface/tasks";

type Props = {
  item: ITasks;
  backgroundColor: string;
};

const size_container_icon = 30;

export const TaskCard = ({ item, backgroundColor }: Props) => {
  const navigation = useNavigation<UseNavigation>();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { title, description, id } = item;
  const { deleteTask } = useTasksStore();

  const handlePresentBottomSheet = () => bottomSheetRef.current?.present();

  return (
    <View>
      <View style={styles.contentIcon}>
        <TouchableOpacity style={styles.containerIcon} activeOpacity={0.8}>
          <Feather name="edit" size={16} color={COLORS.TEXT_COLOR[1]} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerIcon}
          activeOpacity={0.8}
          onPress={handlePresentBottomSheet}
        >
          <Feather name="trash-2" size={16} color={COLORS.TEXT_COLOR[1]} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.contentBottomCard}
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("DetailsScreen", { backgroundColor })
        }
      >
        <View style={styles.wrapperText}>
          <TextComponent
            text={title}
            fontSize={14}
            color={COLORS.TEXT_COLOR[1]}
            fontFamily="PoppinsBold"
          />
          <TextComponent
            text={description}
            fontSize={12}
            color={COLORS.TEXT_COLOR[1]}
          />
        </View>
        <ProgressBarItemCard />
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
};

const styles = StyleSheet.create({
  contentIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
    padding: 10,
  },
  containerIcon: {
    backgroundColor: "rgba(60, 60, 60, 0.5)",
    width: size_container_icon,
    height: size_container_icon,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: size_container_icon / 2,
  },
  contentBottomCard: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  wrapperText: {
    height: 120,
  },
  titleBottomSheet: {
    color: COLORS.TEXT_COLOR[1],
    fontFamily: "PoppinsBold",
    fontSize: 13,
    marginVertical: 10,
  },
  containerButton: {
    backgroundColor: "#cf092a",
    height: 30,
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
