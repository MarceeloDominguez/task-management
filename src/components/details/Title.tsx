import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import TextComponent from "../ui/TextComponent";
import { COLORS } from "../../constants/colors";
import { Feather } from "@expo/vector-icons";

type Props = {
  title: string;
};

const size_container_icon = 30;

export const Title = ({ title }: Props) => {
  return (
    <View style={styles.wrapperTitleandIcon}>
      <TextComponent
        text={title}
        fontSize={16}
        color={COLORS.TEXT_COLOR[1]}
        fontFamily="PoppinsSemiBold"
        style={styles.styleTitleTask}
      />
      <TouchableOpacity style={styles.containerIcon} activeOpacity={0.8}>
        <Feather name="edit" size={16} color={COLORS.TEXT_COLOR[1]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerIcon: {
    backgroundColor: "rgba(60, 60, 60, 0.5)",
    width: size_container_icon,
    height: size_container_icon,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: size_container_icon / 2,
  },
  wrapperTitleandIcon: {
    flexDirection: "row",
    marginBottom: 10,
  },
  styleTitleTask: {
    flex: 1,
    marginRight: 30,
  },
});
