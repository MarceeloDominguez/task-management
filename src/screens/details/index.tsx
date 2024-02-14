import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Date,
  Description,
  Progress,
  ShapeCard,
  SubTasks,
  Title,
} from "../../components/details";
import { useNavigation } from "@react-navigation/native";
import { RootMainStackParamsList, UseNavigation } from "../../navigation/type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLORS } from "../../constants/colors";
import OpenFormSubTasks from "../../components/details/OpenFormSubTasks";

type Props = NativeStackScreenProps<RootMainStackParamsList, "DetailsScreen">;

export const DetailsScreen = ({ route }: Props) => {
  const { backgroundColor, item } = route.params;
  const { title, description, startDate, finalDate, id } = item;
  const navigation = useNavigation<UseNavigation>();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor },
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.contentCard, { backgroundColor }]}>
          <Title title={title} />
          <Date startDate={startDate} finalDate={finalDate} />
          <ShapeCard backgroundColor={backgroundColor} />
        </View>
        <View style={styles.contentScreen}>
          <Description description={description} />
          <Progress backgroundColor={backgroundColor} done={item.done} />
          <SubTasks id={id} />
        </View>
      </ScrollView>
      <OpenFormSubTasks id={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY[1],
  },
  contentCard: {
    paddingHorizontal: 16,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    overflow: "hidden",
    elevation: 10,
  },
  contentScreen: {
    paddingHorizontal: 16,
  },
});
