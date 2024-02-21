import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import TextComponent from "../ui/TextComponent";
import { COLORS } from "../../constants/colors";
import ProgressBarItemCard from "./ProgressBarItemCard";
import { useNavigation } from "@react-navigation/native";
import { UseNavigation } from "../../navigation/type";
import { ITasks } from "../../interface/tasks";
import EditTaks from "./EditTaks";
import DeleteTask from "./DeleteTask";

type Props = {
  item: ITasks;
  backgroundColor: string;
};

export const TaskCard = ({ item, backgroundColor }: Props) => {
  const navigation = useNavigation<UseNavigation>();
  const { title, description, id, percentageTaskCompleted } = item;

  return (
    <View>
      <View style={styles.contentIcon}>
        <EditTaks id={id} />
        <DeleteTask id={id} />
      </View>
      <TouchableOpacity
        style={styles.contentBottomCard}
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("DetailsScreen", { backgroundColor, item })
        }
      >
        <View style={styles.wrapperText}>
          <TextComponent
            text={title}
            fontSize={14}
            color={COLORS.TEXT_COLOR[1]}
            fontFamily="PoppinsBold"
          />
          <TextComponent
            text={description}
            fontSize={12}
            color={COLORS.TEXT_COLOR[1]}
          />
        </View>
        <ProgressBarItemCard
          percentageTaskCompleted={percentageTaskCompleted}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contentIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
    padding: 10,
  },
  contentBottomCard: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  wrapperText: {
    height: 120,
  },
});
