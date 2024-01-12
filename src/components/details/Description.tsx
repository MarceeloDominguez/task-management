import React from "react";
import { View, StyleSheet } from "react-native";
import TextComponent from "../ui/TextComponent";
import { COLORS } from "../../constants/colors";

type Props = {
  description: string;
};

export const Description = ({ description }: Props) => {
  return (
    <View style={styles.container}>
      <TextComponent
        text="Descripción"
        fontSize={16}
        color={COLORS.TEXT_COLOR[1]}
        fontFamily="PoppinsSemiBold"
      />
      <View style={styles.contentDescription}>
        <TextComponent
          text={description}
          fontSize={13}
          color={COLORS.TEXT_COLOR[1]}
          numberOfLines={4}
          style={styles.description}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  contentDescription: {
    padding: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#37383b",
    marginTop: 4,
  },
  description: {
    opacity: 0.8,
    marginBottom: 0,
  },
});
