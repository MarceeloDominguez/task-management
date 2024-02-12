import React, { useEffect, useRef } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
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
import { CustomBottomSheet } from "../../components/ui/CustomBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

type Props = NativeStackScreenProps<RootMainStackParamsList, "DetailsScreen">;

export const DetailsScreen = ({ route }: Props) => {
  const { backgroundColor, item } = route.params;
  const { title, description, startDate, finalDate } = item;
  const navigation = useNavigation<UseNavigation>();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor },
    });
  }, []);

  const handlePresentModalPress = () => bottomSheetRef.current?.present();
  //const handleDismissModalPress = () => bottomSheetRef.current?.dismiss();

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
          <SubTasks handlePresentModalPress={handlePresentModalPress} />
        </View>
      </ScrollView>
      <FlotingButton
        title="Agregar sub tareas"
        onPress={() => console.log("sub taskss")}
      />
      <CustomBottomSheet ref={bottomSheetRef}>
        <Text>Hola desde detalles</Text>
      </CustomBottomSheet>
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
