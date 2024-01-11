import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import TextComponent from "../ui/TextComponent";
import { COLORS } from "../../constants/colors";
import { Feather } from "@expo/vector-icons";
import ProgressBarItemCard from "./ProgressBarItemCard";

const size_container_icon = 30;

export const ItemCard = ({ item }: any) => {
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
      <TouchableOpacity style={styles.contentBottomCard} activeOpacity={0.8}>
        <View style={styles.wrapperText}>
          <TextComponent
            text={item.name}
            fontSize={18}
            color={COLORS.TEXT_COLOR[1]}
            fontFamily="PoppinsBold"
          />
          <TextComponent
            text={item.description}
            fontSize={13}
            color={COLORS.TEXT_COLOR[1]}
          />
        </View>
      </TouchableOpacity>
      <ProgressBarItemCard />
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
});
