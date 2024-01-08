import React from "react";
import { View, StyleSheet } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { COLORS } from "../../constants/colors";

export default function CircleProgress() {
  return (
    <View style={styles.container}>
      <CircularProgress
        value={80}
        radius={33}
        initialValue={100}
        valueSuffix={"%"}
        duration={1000}
        progressValueColor={COLORS.TEXT_COLOR[1]}
        maxValue={100}
        activeStrokeColor={COLORS.SECONDARY[1]}
        inActiveStrokeColor={"#3c444a"}
        activeStrokeWidth={8}
        inActiveStrokeWidth={6}
        progressValueFontSize={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
