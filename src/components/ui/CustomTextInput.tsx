import React from "react";
import { StyleSheet, TextInputProps, TextStyle } from "react-native";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { COLORS } from "../../constants/colors";

interface Props extends TextInputProps {
  additionalStyles?: TextStyle;
}

export default function CustomTextInput(props: Props) {
  return (
    <BottomSheetTextInput
      placeholderTextColor={COLORS.TEXT_COLOR[2]}
      style={StyleSheet.flatten([
        styles.input,
        props.style,
        props.additionalStyles,
      ])}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 8,
    marginBottom: 16,
    borderRadius: 12,
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 12,
    height: 40,
    backgroundColor: COLORS.PRIMARY[2],
    color: COLORS.TEXT_COLOR[1],
    fontFamily: "Poppins",
  },
});
