import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  heightActiveBar?: number;
  heightInactiveBar?: number;
  BackgroundColorBarInactive?: string;
  BackgroundColorBarActive?: string;
};

export default function ProgressBar({
  heightActiveBar = 6,
  heightInactiveBar = 6,
  BackgroundColorBarInactive = "#3c444a",
  BackgroundColorBarActive = "#3168e0",
}: Props) {
  const random = 70;

  const percentageWidth = useSharedValue(0);

  const progressAnimated = useAnimatedStyle(() => {
    return {
      width: withTiming(`${percentageWidth.value}%`, { duration: 500 }),
    };
  });

  useEffect(() => {
    percentageWidth.value = random;
  }, []);

  return (
    <View style={{ justifyContent: "center" }}>
      <View
        style={[
          styles.bottomBar,
          {
            height: heightInactiveBar,
            borderRadius: heightInactiveBar / 2,
            backgroundColor: BackgroundColorBarInactive,
          },
        ]}
      />
      <Animated.View
        style={[
          {
            height: heightActiveBar,
            borderRadius: heightActiveBar / 2,
            backgroundColor: BackgroundColorBarActive,
          },
          progressAnimated,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    width: "100%",
    position: "absolute",
  },
});
