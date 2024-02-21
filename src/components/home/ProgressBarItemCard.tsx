import React from "react";
import { View, StyleSheet } from "react-native";
import TextComponent from "../ui/TextComponent";
import { COLORS } from "../../constants/colors";

type Props = {
  percentageTaskCompleted: string;
};

export default function ProgressBarItemCard({
  percentageTaskCompleted,
}: Props) {
  return (
    <View>
      <View style={styles.containerBarProgress}>
        <View
          style={[
            styles.barProgress,
            { width: `${Number(percentageTaskCompleted)}%` },
          ]}
        />
      </View>
      <View style={styles.wrapperTextBarProgress}>
        <TextComponent
          text={
            Number(percentageTaskCompleted) < 100 ? "En Progreso" : "Completada"
          }
          fontSize={13}
          color={COLORS.TEXT_COLOR[1]}
          fontFamily="PoppinsSemiBold"
        />
        <TextComponent
          text={`${percentageTaskCompleted}%`}
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
  containerBarProgress: {
    height: 6,
    backgroundColor: "#3c444a",
    borderRadius: 3,
  },
  barProgress: {
    height: 6,
    backgroundColor: "#3168e0",
    borderRadius: 3,
  },
});
