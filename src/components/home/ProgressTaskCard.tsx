import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import TextComponent from "../ui/TextComponent";
import CircleProgress from "../ui/CircleProgress";

export const ProgressTaskCard = () => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.wrapperCardLeft}>
        <TextComponent text="Tareas en Progreso" />
        <TextComponent
          text="30/40 tareas completadas"
          style={styles.styleText}
        />
        <View style={styles.containerDate}>
          <Text style={styles.date}>March 22</Text>
        </View>
      </View>
      <CircleProgress />
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: COLORS.PRIMARY[2],
    marginTop: 15,
    borderRadius: 10,
    padding: 16,
    flexDirection: "row",
    gap: 8,
  },
  wrapperCardLeft: {
    flex: 1,
  },
  styleText: {
    fontSize: 15,
    color: COLORS.TEXT_COLOR[2],
  },
  containerDate: {
    backgroundColor: COLORS.SECONDARY[1],
    width: 80,
    height: 26,
    borderRadius: 26 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  date: {
    color: COLORS.TEXT_COLOR[1],
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: 0.3,
  },
});
