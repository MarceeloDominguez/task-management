import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { COLORS } from "../../constants/colors";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={24} color={COLORS.SECONDARY[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
