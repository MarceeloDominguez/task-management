import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

type Props = {
  label: string;
  asterisk?: boolean;
  error?: boolean;
  sent?: boolean;
};

export default function LabelTextInput({
  label,
  asterisk = true,
  error,
  sent,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
      {asterisk ? (
        <Text
          style={{
            color: error && sent ? COLORS.ERROR[1] : COLORS.TEXT_COLOR[1],
          }}
        >
          *
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: COLORS.TEXT_COLOR[1],
    fontSize: 12,
    letterSpacing: 0.3,
    fontFamily: "PoppinsBold",
  },
});
