import React from "react";
import { View, StyleSheet } from "react-native";
import TextComponent from "../ui/TextComponent";
import { COLORS } from "../../constants/colors";

type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <TextComponent
        text={title}
        fontSize={16}
        color={COLORS.TEXT_COLOR[1]}
        fontFamily="PoppinsSemiBold"
        style={styles.styleTitleTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  styleTitleTask: {
    flex: 1,
    marginRight: 30,
    height: 50,
  },
});
