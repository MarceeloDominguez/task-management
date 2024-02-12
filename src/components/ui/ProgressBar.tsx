import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useTasksStore } from "../../store/tasksStore";

type Props = {
  heightActiveBar?: number;
  heightInactiveBar?: number;
  backgroundColorBarInactive?: string;
  backgroundColorBarActive?: string;
  done?: boolean;
};

export default function ProgressBar({
  heightActiveBar = 6,
  heightInactiveBar = 6,
  backgroundColorBarInactive = "#3c444a",
  backgroundColorBarActive = "#3168e0",
  done,
}: Props) {
  const { isLoading } = useTasksStore();
  const [subTask, setSubTask] = useState<
    { subtask: string; completed: boolean }[]
  >([
    { subtask: "Hola 2", completed: true },
    { subtask: "Hola 3", completed: true },
  ]);

  useEffect(() => {
    if (!isLoading) {
      percentageWidth.value = done || subTask.length > 0 ? percentage : 0;
    }
  }, [isLoading, done]);

  const percentageWidth = useSharedValue(0);

  const filterSubTasksCompleted = subTask.filter(
    (task) => task.completed === true
  );

  const percentage =
    subTask.length === 0
      ? 0
      : (filterSubTasksCompleted.length / subTask.length) * 100;

  const progressAnimated = useAnimatedStyle(() => {
    return {
      width: withTiming(`${percentageWidth.value}%`, { duration: 500 }),
    };
  });

  return (
    <View style={{ justifyContent: "center" }}>
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
  bottomBar: {
    width: "100%",
    position: "absolute",
  },
});
