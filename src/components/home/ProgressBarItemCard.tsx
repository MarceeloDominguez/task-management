import React from "react";
import { View, StyleSheet } from "react-native";
import ProgressBar from "../ui/ProgressBar";
import TextComponent from "../ui/TextComponent";
import { COLORS } from "../../constants/colors";

export default function ProgressBarItemCard() {
  return (
    <View>
      <ProgressBar />
      <View style={styles.wrapperTextBarProgress}>
        <TextComponent
          text="Progreso"
          fontSize={13}
          color={COLORS.TEXT_COLOR[1]}
          fontFamily="PoppinsSemiBold"
        />
        <TextComponent
          text="40%"
          color={COLORS.TEXT_COLOR[1]}
          fontSize={13}
          fontFamily="PoppinsSemiBold"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperTextBarProgress: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
});
