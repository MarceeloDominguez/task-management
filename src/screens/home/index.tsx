import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../../constants/colors";
import { Input, ProgressTaskCard } from "../../components/home";

export const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Input />
      <ProgressTaskCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY[1],
    paddingHorizontal: 16,
  },
});
