import React from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  backgroundColor: string;
};

export const ShapeCard = ({ backgroundColor }: Props) => {
  return (
    <View>
      <View
        style={[
          styles.circleCard,
          {
            backgroundColor: "rgba(240, 240, 240, 0.12)",
            right: -220,
            bottom: -370,
            zIndex: -2,
          },
        ]}
      />
      <View
        style={[
          styles.circleCard,
          {
            backgroundColor,
            right: -290,
            bottom: -430,
            zIndex: -1,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circleCard: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    position: "absolute",
  },
});
