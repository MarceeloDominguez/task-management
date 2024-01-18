import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import CustomTextInput from "../ui/CustomTextInput";
import LabelTextInput from "../ui/LabelTextInput";
import CustomButton from "../ui/CustomButton";

const { height } = Dimensions.get("window");

export const Form = () => {
  return (
    <View style={styles.container}>
      <LabelTextInput label="Nueva Tarea" />
      <CustomTextInput placeholder="¿Cuál es tu próxima tarea?" />
      <LabelTextInput label="Descripción de la Tarea" />
      <CustomTextInput
        placeholder="Descripción de la tarea..."
        multiline
        additionalStyles={styles.additionalStyles}
      />
      <LabelTextInput label="Seleccionar Fechas" />
      <View style={styles.wrapperButtonDate}>
        <CustomButton
          buttonTitle="Fecha de Inicio"
          additionalStyles={styles.button}
        />
        <CustomButton
          buttonTitle="Fecha Final"
          additionalStyles={styles.button}
        />
      </View>
      <CustomButton buttonTitle="Agregar" />
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
    gap: 8,
    marginBottom: height > 592 ? 50 : 30,
    marginTop: 8,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(142, 141, 145, 0.4)",
    backgroundColor: "transparent",
  },
});
