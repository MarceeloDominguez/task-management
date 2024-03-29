import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

type Props = {
  text: string;
  style?: TextStyle;
  fontSize: number;
  color: string;
  fontFamily?: string;
  numberOfLines?: number;
};

export default function TextComponent({
  text,
  fontSize,
  color,
  fontFamily = "Poppins",
  style,
  numberOfLines = 2,
}: Props) {
  return (
    <Text
      style={[styles.text, style, { fontSize, color, fontFamily }]}
      numberOfLines={numberOfLines}
    >
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    letterSpacing: 0.3,
    marginBottom: 6,
  },
});
