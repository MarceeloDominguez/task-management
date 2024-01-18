import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { COLORS } from "../../constants/colors";

interface Props extends TouchableOpacityProps {
  buttonTitle: string;
  additionalStyles?: ViewStyle;
  additionalTextStyles?: TextStyle;
}

export default function CustomButton(props: Props) {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        styles.containerButton,
        props.additionalStyles,
      ])}
      activeOpacity={0.8}
      {...props}
    >
      <Text
        style={StyleSheet.flatten([
          styles.buttonTitle,
          props.additionalTextStyles,
        ])}
      >
        {props.buttonTitle}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: COLORS.SECONDARY[1],
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: COLORS.TEXT_COLOR[1],
    fontFamily: "PoppinsBold",
  },
});
