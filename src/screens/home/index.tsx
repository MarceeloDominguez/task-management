import React, { useEffect, useRef } from "react";
import { StyleSheet, FlatList, View, Dimensions, Image } from "react-native";
import { COLORS } from "../../constants/colors";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Input, TaskCard, ProgressTaskCard, Form } from "../../components/home";
import FlotingButton from "../../components/ui/FlotingButton";
import { useTasksStore } from "../../store/tasksStore";
import { LayoutBottomSheetModal } from "../../components/ui/LayoutBottomSheetModal";

const { width } = Dimensions.get("window");

const ITEM_WIDTH = width * 0.5 - 21; //16px padding horizontal + 5px of the item gap = 21px

const COLORS_CARD = [COLORS.CARD[1], COLORS.CARD[2], COLORS.CARD[3]];

const ListHeaderComponent = () => {
  return (
    <>
      <Input />
      <ProgressTaskCard />
    </>
  );
};

export const HomeScreen = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { tasks, getAllTasks } = useTasksStore();

  // const handleDismissbottomSheetPress = () => bottomSheetRef.current?.dismiss();
  const handlePresentbottomSheetPress = () => bottomSheetRef.current?.present();

  console.log(handlePresentbottomSheetPress());

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(_, i) => i.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item, index }) => {
          const backgroundColor = COLORS_CARD[index % COLORS_CARD.length];

          return (
            <View style={[styles.contentItem, { backgroundColor }]}>
              <Image
                source={require("../../../assets/card/v-card.png")}
                style={styles.imageCard}
              />
              <TaskCard item={item} backgroundColor={backgroundColor} />
            </View>
          );
        }}
      />
      <FlotingButton
        title="Agregar nueva tarea"
        onPress={handlePresentbottomSheetPress}
      />
      <LayoutBottomSheetModal ref={bottomSheetRef}>
        <Form />
      </LayoutBottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY[1],
    paddingHorizontal: 16,
  },
  columnWrapperStyle: {
    justifyContent: "space-between",
    marginVertical: 5,
    gap: 5,
  },
  contentItem: {
    width: ITEM_WIDTH,
    borderRadius: 12,
    overflow: "hidden",
  },
  imageCard: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
