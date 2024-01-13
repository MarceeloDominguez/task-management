import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import TextComponent from "../ui/TextComponent";
import { COLORS } from "../../constants/colors";
import { Feather } from "@expo/vector-icons";

export const SubTasks = () => {
  return (
    <View style={styles.container}>
      <TextComponent
        text="Sub tareas"
        fontSize={16}
        color={COLORS.TEXT_COLOR[1]}
        fontFamily="PoppinsSemiBold"
      />
      {[...Array(4)].map((item, index) => (
        <View key={index} style={styles.containerCardTask}>
          <TouchableOpacity activeOpacity={0.8} style={styles.contentTask}>
            <View style={styles.contentIconLeft}>
              <Feather name="check" size={16} color={COLORS.PRIMARY[1]} />
            </View>
            <TextComponent
              text="Nisi enim nostrud ipsum dolor In et aute deserunt ipsum. Ad aliqua laboris qui ad veniam aliquip ex deserunt non."
              fontSize={12}
              color={COLORS.TEXT_COLOR[1]}
              style={styles.subTaskText}
            />
          </TouchableOpacity>
          <Feather
            name="more-vertical"
            size={20}
            color={COLORS.TEXT_COLOR[1]}
            style={styles.iconRight}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 80,
  },
  containerCardTask: {
    backgroundColor: COLORS.PRIMARY[2],
    flexDirection: "row",
    marginBottom: 15,
    height: 44,
    borderRadius: 12,
    paddingLeft: 10,
    gap: 5,
  },
  contentTask: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1,
  },
  contentIconLeft: {
    backgroundColor: "#6bc950",
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6bc950",
  },
  subTaskText: {
    marginBottom: 0,
    flex: 1,
    textDecorationLine: "line-through",
  },
  iconRight: {
    height: "100%",
    textAlignVertical: "center",
    opacity: 0.7,
  },
});
