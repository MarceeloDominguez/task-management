import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import CustomTextInput from "../ui/CustomTextInput";
import LabelTextInput from "../ui/LabelTextInput";
import CustomButton from "../ui/CustomButton";
import LayoutModalCalendar from "./LayoutModalCalendar";
import CustomCalendar from "./CustomCalendar";
import { COLORS } from "../../constants/colors";
import { useTasksStore } from "../../store/tasksStore";

const { height } = Dimensions.get("window");

type Props = {
  handleDismissbottomSheet: () => void;
};

export const Form = ({ handleDismissbottomSheet }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectDate, setSelectDate] = useState<string[]>([]);
  const [formData, setFormData] = useState({ task: "", description: "" });
  const { addTasks } = useTasksStore();

  const compareDates = (a: string, b: string) => {
    const dateA = new Date(a);
    const dateB = new Date(b);

    return dateA.getTime() - dateB.getTime();
  };

  const sortedDates = selectDate.sort(compareDates);

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleFormSubmit = () => {
    //cierre del bottom sheet
    handleDismissbottomSheet();

    addTasks({
      description: formData.description,
      title: formData.task,
      startDate: sortedDates[0],
      finalDate: sortedDates[1],
      done: false,
    });
  };

  const handleApplyDate = () => {
    setIsOpenModal(false);
  };

  const cancelSendingDates = () => {
    setSelectDate([]);
  };

  return (
    <View style={styles.container}>
      <LabelTextInput label="Nueva Tarea" />
      <CustomTextInput
        placeholder="¿Cuál es tu próxima tarea?"
        value={formData.task}
        onChangeText={(value) => handleChange("task", value)}
      />
      <LabelTextInput label="Descripción de la Tarea" />
      <CustomTextInput
        placeholder="Descripción de la tarea..."
        multiline
        keyboardType="default"
        blurOnSubmit
        additionalStyles={styles.additionalStyles}
        value={formData.description}
        onChangeText={(value) => handleChange("description", value)}
      />
      <View style={styles.wrapperButton}>
        <CustomButton
          buttonTitle="Seleccionar Fechas"
          additionalStyles={styles.button}
          onPress={() => setIsOpenModal(true)}
        />
      </View>
      <View style={styles.wrapperButtonDate}>
        <View style={styles.wrapperButtonLabel}>
          <LabelTextInput label="Inicio" asterisk={false} />
          <CustomButton
            buttonTitle={selectDate[0] ? selectDate[0] : "Fecha de Inicio"}
            additionalStyles={styles.date}
            activeOpacity={1}
          />
        </View>
        <View style={styles.wrapperButtonLabel}>
          <LabelTextInput label="Final" asterisk={false} />
          <CustomButton
            buttonTitle={selectDate[1] ? selectDate[1] : "Fecha Final"}
            additionalStyles={styles.date}
            activeOpacity={1}
          />
        </View>
      </View>
      <CustomButton buttonTitle="Agregar" onPress={handleFormSubmit} />
      {/* modal para seleccionar las fechas */}
      <LayoutModalCalendar
        isOpenModal={isOpenModal}
        onPress={(e) => {
          cancelSendingDates();
          setIsOpenModal(false);
          e.stopPropagation();
        }}
      >
        <CustomCalendar
          closeModal={() => {
            cancelSendingDates();
            setIsOpenModal(false);
          }}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
          applyDate={handleApplyDate}
        />
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
    gap: 12,
    marginBottom: height > 592 ? 50 : 30,
    marginTop: 8,
    justifyContent: "space-between",
  },
  wrapperButtonLabel: {
    flex: 1,
  },
  wrapperButton: {
    marginBottom: 10,
    marginTop: 4,
  },
  button: {
    backgroundColor: COLORS.PRIMARY[2],
  },
  date: {
    borderWidth: 1,
    borderColor: "rgba(142, 141, 145, 0.4)",
    backgroundColor: "transparent",
    marginTop: 8,
  },
});
