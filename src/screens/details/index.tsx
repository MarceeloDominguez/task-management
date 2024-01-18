import React, { useEffect, useRef } from "react";
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
import { CustomBottomSheet } from "../../components/ui/CustomBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

type Props = NativeStackScreenProps<RootMainStackParamsList, "DetailsScreen">;

export const DetailsScreen = ({ route }: Props) => {
  const { backgroundColor } = route.params;
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
          <Title title="Aliqua sit officia cupidatat ullamco quis sunt." />
          <Date />
          <ShapeCard backgroundColor={backgroundColor} />
        </View>
        <View style={styles.contentScreen}>
          <Description description="Officia minim anim consequat duis est velit ase e esr adtrw as excepteur irure sunt tempor nostrud in laborum.Cillum laborum incididunt et deserunt. Velit adipisicing cillum cupidatat excepteur aliquip ipsum officia consectetur ullamco sint cillum officia." />
          <Progress backgroundColor={backgroundColor} />
          <SubTasks handlePresentModalPress={handlePresentModalPress} />
        </View>
      </ScrollView>
      <FlotingButton
        title="Agregar sub tareas"
        onPress={() => console.log("Sub tasks...")}
      />
      <CustomBottomSheet ref={bottomSheetRef} />
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
