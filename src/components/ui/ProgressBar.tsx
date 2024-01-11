import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function ProgressBar() {
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
      <View style={[styles.bottomBar]} />
      <Animated.View style={[styles.bottomBarAnimated, progressAnimated]} />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    height: 6,
    width: "100%",
    backgroundColor: "#3c444a",
    position: "absolute",
    borderRadius: 3,
  },
  bottomBarAnimated: {
    height: 6,
    backgroundColor: COLORS.SECONDARY[1],
    borderRadius: 3,
  },
});
