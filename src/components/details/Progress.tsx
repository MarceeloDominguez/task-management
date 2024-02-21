import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import ProgressBar from "../ui/ProgressBar";
import TextComponent from "../ui/TextComponent";

type Props = {
  backgroundColor: string;
  done?: boolean;
  percentage: number;
};

export const Progress = ({ backgroundColor, done, percentage }: Props) => {
  return (
    <View>
      <View style={styles.containerLabel}>
        <View style={[{ borderColor: backgroundColor }, styles.borderCircle]}>
          <View style={[styles.circle, { backgroundColor }]} />
        </View>
        <Text style={styles.label}>
          {percentage < 100 ? "En Progreso" : "Completada"}
        </Text>
      </View>
      <View style={styles.containerBarProgress}>
        <View style={{ flex: 1 }}>
          <ProgressBar
            heightActiveBar={10}
            heightInactiveBar={8}
            backgroundColorBarActive={backgroundColor}
            done={done}
            percentage={percentage}
          />
        </View>
        <TextComponent
          text={`${percentage.toString().split(".")[0]}%`}
          color={COLORS.TEXT_COLOR[1]}
          fontSize={15}
          fontFamily="PoppinsBold"
          style={{ marginBottom: 0 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBarProgress: {
    marginVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  containerLabel: {
    flexDirection: "row",
    marginTop: 16,
    gap: 8,
  },
  borderCircle: {
    width: 16,
    height: 16,
    backgroundColor: COLORS.PRIMARY[1],
    borderRadius: 16 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  label: {
    color: COLORS.TEXT_COLOR[1],
    fontSize: 13,
    fontFamily: "Poppins",
    letterSpacing: 0.3,
  },
});
