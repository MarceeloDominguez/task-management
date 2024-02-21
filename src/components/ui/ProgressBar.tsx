import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSubTasksStore } from "../../store/subTasksStore";

type Props = {
  heightActiveBar?: number;
  heightInactiveBar?: number;
  backgroundColorBarInactive?: string;
  backgroundColorBarActive?: string;
  done?: boolean;
  percentage: number;
};

export default function ProgressBar({
  heightActiveBar = 6,
  heightInactiveBar = 6,
  backgroundColorBarInactive = "#3c444a",
  backgroundColorBarActive = "#3168e0",
  done,
  percentage,
}: Props) {
  const { subTasks, isLoading } = useSubTasksStore();

  const percentageWidth = useSharedValue(0);

  useEffect(() => {
    if (!isLoading) {
      percentageWidth.value = done || subTasks.length > 0 ? percentage : 0;
    }
  }, [isLoading, done, percentage]);

  const progressAnimated = useAnimatedStyle(() => {
    return {
      width: withTiming(`${percentageWidth.value}%`, { duration: 250 }),
    };
  });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.bottomBar,
          {
            height: heightInactiveBar,
            borderRadius: heightInactiveBar / 2,
            backgroundColor: backgroundColorBarInactive,
          },
        ]}
      />
      <Animated.View
        style={[
          {
            height: heightActiveBar,
            borderRadius: heightActiveBar / 2,
            backgroundColor: backgroundColorBarActive,
          },
          progressAnimated,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  bottomBar: {
    width: "100%",
    position: "absolute",
  },
});
