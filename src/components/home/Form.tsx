import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import CustomTextInput from "../ui/CustomTextInput";
import LabelTextInput from "../ui/LabelTextInput";
import CustomButton from "../ui/CustomButton";
import { CustomCalendar, LayoutModalCalendar } from "../../components/home";

const { height } = Dimensions.get("window");

export const Form = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <View style={styles.container}>
      <LabelTextInput label="Nueva Tarea" />
      <CustomTextInput placeholder="¿Cuál es tu próxima tarea?" />
      <LabelTextInput label="Descripción de la Tarea" />
      <CustomTextInput
        placeholder="Descripción de la tarea..."
        multiline
        keyboardType="default"
        blurOnSubmit
        additionalStyles={styles.additionalStyles}
      />
      <View style={styles.wrapperButtonDate}>
        <View style={styles.wrapperButtonLabel}>
          <LabelTextInput label="Inicio" />
          <CustomButton
            buttonTitle="Fecha de Inicio"
            additionalStyles={styles.button}
            onPress={() => setIsOpenModal(true)}
          />
        </View>
        <View style={styles.wrapperButtonLabel}>
          <LabelTextInput label="Final" />
          <CustomButton
            buttonTitle="Fecha Final"
            additionalStyles={styles.button}
            onPress={() => setIsOpenModal(true)}
          />
        </View>
      </View>
      <CustomButton buttonTitle="Agregar" />
      <LayoutModalCalendar
        isOpenModal={isOpenModal}
        onPress={(e) => {
          setIsOpenModal(false);
          e.stopPropagation();
        }}
      >
        <CustomCalendar onPress={() => setIsOpenModal(false)} />
      </LayoutModalCalendar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    paddingTop: 10,
  },
  additionalStyles: {
    height: 80,
    textAlignVertical: "top",
    padding: 12,
  },
  wrapperButtonDate: {
    flexDirection: "row",
    gap: 18,
    marginBottom: height > 592 ? 50 : 30,
    marginTop: 8,
  },
  wrapperButtonLabel: {
    flex: 1,
  },
  button: {
    borderWidth: 1,
    borderColor: "rgba(142, 141, 145, 0.4)",
    backgroundColor: "transparent",
  },
});
