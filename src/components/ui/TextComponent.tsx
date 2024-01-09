import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import { COLORS } from "../../constants/colors";

type Props = {
  text: string;
  style?: TextStyle;
};

export default function TextComponent({ text, style }: Props) {
  return (
    <Text style={[styles.text, style]} numberOfLines={2}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: COLORS.TEXT_COLOR[1],
    letterSpacing: 0.3,
    marginBottom: 6,
    fontFamily: "PoppinsBold",
  },
});
