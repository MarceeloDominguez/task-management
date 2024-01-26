import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import CustomTextInput from "../ui/CustomTextInput";
import LabelTextInput from "../ui/LabelTextInput";
import CustomButton from "../ui/CustomButton";
import LayoutModalCalendar from "./LayoutModalCalendar";
import CustomCalendar from "./CustomCalendar";
import { COLORS } from "../../constants/colors";
import { useTasksStore } from "../../store/tasksStore";
import { compareDates, formatDate, validateForm } from "../../helpers";
import { Feather } from "@expo/vector-icons";
import { useContextProvider } from "../../context/contextProvider";

const { height } = Dimensions.get("window");

export const Form = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectDate, setSelectDate] = useState<string[]>([]);
  const [formData, setFormData] = useState({ task: "", description: "" });
  const [sent, setSent] = useState(false);
  const errors = validateForm(formData);
  const { addTasks, editTask } = useTasksStore();
  const {
    taskToEdit,
    bottomSheetVisible,
    idTask,
    handleDismissbottomSheet,
    bottomSheetRef,
  } = useContextProvider();

  useEffect(() => {
    if (taskToEdit !== null) {
      setFormData({
        task: taskToEdit.title,
        description: taskToEdit.description,
      });
    }

    if (!bottomSheetVisible) {
      setFormData({ task: "", description: "" });
      setSent(false);
    }
  }, [bottomSheetVisible]);

  const sortedDates = selectDate.sort(compareDates);

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleFormSubmit = () => {
    setSent(true);

    if (!formData.task || !formData.description) return;

    if (taskToEdit !== null) {
      editTask(idTask!, {
        title: formData.task,
        description: formData.description,
        startDate: sortedDates[0] ? sortedDates[0] : taskToEdit.startDate,
        finalDate: selectDate[1] ? sortedDates[1] : taskToEdit.finalDate,
        done: false,
      });
    } else {
      addTasks({
        description: formData.description,
        title: formData.task,
        startDate: sortedDates[0],
        finalDate: sortedDates[1],
        done: false,
      });
    }

    //cierre del bottom sheet
    handleDismissbottomSheet();
    bottomSheetRef.current?.dismiss();
  };

  const handleApplyDate = () => {
    setIsOpenModal(false);
  };

  const cancelSendingDates = () => {
    setSelectDate([]);
  };

  return (
    <View style={styles.container}>
      <LabelTextInput
        label="Nueva Tarea"
        error={errors.errorTask}
        sent={sent}
      />
      <CustomTextInput
        placeholder="¿Cuál es tu próxima tarea?"
        value={formData.task}
        onChangeText={(value) => handleChange("task", value)}
        additionalStyles={{
          borderWidth: 1,
          borderColor:
            errors.errorTask && sent ? COLORS.ERROR[1] : "transparent",
        }}
      />
      <LabelTextInput
        label="Descripción de la Tarea"
        error={errors.errorDescription}
        sent={sent}
      />
      <CustomTextInput
        placeholder="Descripción de la tarea..."
        multiline
        keyboardType="default"
        blurOnSubmit
        additionalStyles={{
          ...styles.additionalStyles,
          borderWidth: 1,
          borderColor:
            errors.errorDescription && sent ? COLORS.ERROR[1] : "transparent",
        }}
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
            buttonTitle={
              selectDate[0]
                ? formatDate(selectDate[0])
                : taskToEdit?.startDate
                ? formatDate(taskToEdit.startDate)
                : "Fecha de Inicio"
            }
            additionalStyles={styles.date}
            additionalTextStyles={styles.textStylesButtonDate}
            activeOpacity={1}
          >
            <Feather
              name="calendar"
              size={16}
              color={COLORS.TEXT_COLOR[1]}
              style={styles.iconCalendar}
            />
          </CustomButton>
        </View>
        <View style={styles.wrapperButtonLabel}>
          <LabelTextInput label="Final" asterisk={false} />
          <CustomButton
            buttonTitle={
              selectDate[1]
                ? formatDate(selectDate[1])
                : taskToEdit?.finalDate
                ? formatDate(taskToEdit.finalDate)
                : "Fecha Final"
            }
            additionalStyles={styles.date}
            additionalTextStyles={styles.textStylesButtonDate}
            activeOpacity={1}
          >
            <Feather
              name="calendar"
              size={16}
              color={COLORS.TEXT_COLOR[1]}
              style={styles.iconCalendar}
            />
          </CustomButton>
        </View>
      </View>
      <CustomButton
        buttonTitle={taskToEdit !== null ? "Editar" : "Agregar"}
        onPress={handleFormSubmit}
      />
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
  iconCalendar: {
    marginBottom: 2,
    opacity: 0.7,
  },
  textStylesButtonDate: {
    opacity: 0.7,
  },
});
