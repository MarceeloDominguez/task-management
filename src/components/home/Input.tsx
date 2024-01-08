import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UseNavigation } from "../../navigation/type";

export const Input = () => {
  const navigation = useNavigation<UseNavigation>();

  return (
    <Pressable
      style={styles.containerInput}
      onPress={() => navigation.navigate("SearchScreen")}
    >
      <Text style={styles.placeholderText}>Buscar una tarea</Text>
      <Ionicons name="search-outline" size={22} color={COLORS.TEXT_COLOR[2]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    backgroundColor: COLORS.PRIMARY[2],
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  placeholderText: {
    color: COLORS.TEXT_COLOR[2],
    fontSize: 15,
    letterSpacing: 0.3,
    opacity: 0.8,
  },
});
