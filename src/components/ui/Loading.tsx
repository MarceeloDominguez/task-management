import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useTasksStore } from "../../store/tasksStore";
import { COLORS } from "../../constants/colors";

export default function Loading() {
  const { isLoading } = useTasksStore();

  return (
    <View
      style={{
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <ActivityIndicator size={24} color={COLORS.SECONDARY[1]} />
    </View>
  );
}

const styles = StyleSheet.create({});
