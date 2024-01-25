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
  buttonTitle: string | undefined;
  additionalStyles?: ViewStyle;
  additionalTextStyles?: TextStyle;
  children?: React.ReactNode;
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
      {props.children}
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
    flexDirection: "row",
    gap: 5,
  },
  buttonTitle: {
    color: COLORS.TEXT_COLOR[1],
    fontFamily: "PoppinsBold",
    fontSize: 13,
  },
});
