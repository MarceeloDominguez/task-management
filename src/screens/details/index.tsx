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
import FlotingButton from "../../components/ui/FlotingButton";
import { useNavigation } from "@react-navigation/native";
import { RootMainStackParamsList, UseNavigation } from "../../navigation/type";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { COLORS } from "../../constants/colors";

type Props = NativeStackScreenProps<RootMainStackParamsList, "DetailsScreen">;

export const DetailsScreen = ({ route }: Props) => {
  const { backgroundColor } = route.params;
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
          <Title title="Aliqua sit officia cupidatat ullamco quis sunt." />
          <Date />
          <ShapeCard backgroundColor={backgroundColor} />
        </View>
        <View style={styles.contentScreen}>
          <Description description="Officia minim anim consequat duis est velit ase e esr adtrw as excepteur irure sunt tempor nostrud in laborum.Cillum laborum incididunt et deserunt. Velit adipisicing cillum cupidatat excepteur aliquip ipsum officia consectetur ullamco sint cillum officia." />
          <Progress backgroundColor={backgroundColor} />
          <SubTasks />
        </View>
      </ScrollView>
      <FlotingButton title="Agregar sub tareas" />
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
