import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import TextComponent from "../ui/TextComponent";
import { COLORS } from "../../constants/colors";
import { Feather } from "@expo/vector-icons";

const size_container_icon = 30;

export const ItemCard = () => {
  return (
    <View>
      <View style={styles.contentIcon}>
        <TouchableOpacity style={styles.containerIcon} activeOpacity={0.8}>
          <Feather name="edit" size={16} color={COLORS.TEXT_COLOR[1]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerIcon} activeOpacity={0.8}>
          <Feather name="trash-2" size={16} color={COLORS.TEXT_COLOR[1]} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.contentText} activeOpacity={0.8}>
        <TextComponent text="UX Design" />
        <TextComponent
          text="Task management mobile app"
          style={styles.description}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    fontFamily: "Poppins",
  },
  contentIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
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
  contentText: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
