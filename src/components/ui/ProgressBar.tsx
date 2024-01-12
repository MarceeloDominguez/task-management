import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  height?: number;
  inactiveBarBackgroundColor?: string;
  activeBarBackgroundColor?: string;
};

export default function ProgressBar({
  height = 6,
  inactiveBarBackgroundColor = "#3c444a",
  activeBarBackgroundColor = "#3168e0",
}: Props) {
  const random = 50;

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
    <View>
      <View
        style={[
          styles.bottomBar,
          {
            height,
            borderRadius: height / 2,
            backgroundColor: inactiveBarBackgroundColor,
          },
        ]}
      />
      <Animated.View
        style={[
          {
            height,
            borderRadius: height / 2,
            backgroundColor: activeBarBackgroundColor,
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
