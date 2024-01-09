import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { Feather } from "@expo/vector-icons";

type Props = {
  title: string;
};

export default function FlotingButton({ title }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.coontainerButton}>
      <Text style={styles.buttonTitle}>{title}</Text>
      <Feather name="plus" size={18} color={COLORS.TEXT_COLOR[1]} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  coontainerButton: {
    backgroundColor: COLORS.SECONDARY[1],
    position: "absolute",
    left: 70,
    right: 70,
    bottom: 25,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    flexDirection: "row",
    gap: 4,
  },
  buttonTitle: {
    color: COLORS.TEXT_COLOR[1],
    letterSpacing: 0.3,
    fontSize: 13,
    fontFamily: "PoppinsBold",
  },
});
