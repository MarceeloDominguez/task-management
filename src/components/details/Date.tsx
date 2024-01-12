import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

export const Date = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.wrapperItem}>
          <Text style={styles.title}>Inicio</Text>
          <View style={styles.wrapperIcon}>
            <Feather
              name="calendar"
              size={16}
              color={COLORS.TEXT_COLOR[1]}
              style={styles.icon}
            />
            <Text style={styles.date}>May 29 2024</Text>
          </View>
        </View>
        <View style={styles.wrapperItem}>
          <Text style={styles.title}>Final</Text>
          <View style={styles.wrapperIcon}>
            <Feather
              name="calendar"
              size={16}
              color={COLORS.TEXT_COLOR[1]}
              style={styles.icon}
            />
            <Text style={styles.date}>Jun 29 2024</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 24,
    marginTop: 5,
    gap: 15,
  },
  wrapperItem: {
    paddingRight: 10,
  },
  wrapperIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  date: {
    fontSize: 12,
    fontFamily: "PoppinsSemiBold",
    color: COLORS.TEXT_COLOR[1],
    textAlignVertical: "center",
    marginTop: 3,
    opacity: 0.7,
  },
  icon: {
    opacity: 0.7,
  },
  title: {
    fontSize: 13,
    fontFamily: "PoppinsSemiBold",
    color: COLORS.TEXT_COLOR[1],
    letterSpacing: 0.3,
  },
});
