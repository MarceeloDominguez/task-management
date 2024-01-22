import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { COLORS } from "../../constants/colors";

interface MarkedDate {
  selected: boolean;
  marked?: boolean;
  disableTouchEvent?: boolean;
  selectedColor?: string;
  selectedTextColor?: string;
}

type Props = {
  selectDate: string[];
  setSelectDate: React.Dispatch<React.SetStateAction<string[]>>;
  closeModal: () => void;
  applyDate: () => void;
};

LocaleConfig.locales["es"] = {
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  dayNames: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
};

LocaleConfig.defaultLocale = "es";

export default function CustomCalendar({
  closeModal,
  selectDate,
  setSelectDate,
  applyDate,
}: Props) {
  const handleDateSelection = (date: string) => {
    // Clona el array de fechas seleccionadas
    const updatedSelectedDates = [...selectDate];

    // Verifica si la fecha ya está en el array
    const index = updatedSelectedDates.indexOf(date);

    if (index !== -1) {
      // Si está en el array, la quita
      updatedSelectedDates.splice(index, 1);
    } else {
      // Si no está en el array y ya hay dos fechas seleccionadas, quita la primera para agregar la nueva
      if (updatedSelectedDates.length === 2) {
        updatedSelectedDates.shift();
      }

      // Agrega la nueva fecha
      updatedSelectedDates.push(date);
    }

    // Actualiza el estado con las fechas seleccionadas
    setSelectDate(updatedSelectedDates);
  };

  const markedDates = selectDate.reduce((obj, date) => {
    obj[date] = {
      selected: true,
      marked: true,
      disableTouchEvent: true,
      selectedColor: COLORS.SECONDARY[1],
      selectedTextColor: COLORS.TEXT_COLOR[1],
    };
    return obj;
  }, {} as { [date: string]: MarkedDate });

  return (
    <Pressable style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          handleDateSelection(day.dateString);
        }}
        markedDates={markedDates}
        theme={{
          monthTextColor: COLORS.TEXT_COLOR[1],
          textMonthFontFamily: "PoppinsBold",
          dayTextColor: COLORS.TEXT_COLOR[2],
          textDayFontFamily: "Poppins",
          calendarBackground: COLORS.PRIMARY[2],
          arrowColor: COLORS.SECONDARY[1],
          todayTextColor: COLORS.SECONDARY[1],
          textDisabledColor: "#4d4c4e",
          textDayFontSize: 14,
          textDayStyle: { fontFamily: "Poppins" },
        }}
        style={{ height: 350 }}
      />
      <View style={styles.wrapperButtons}>
        <Pressable
          onPress={closeModal}
          style={[styles.button, { backgroundColor: COLORS.PRIMARY[1] }]}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </Pressable>
        <Pressable
          onPress={applyDate}
          style={[styles.button, { backgroundColor: COLORS.SECONDARY[1] }]}
        >
          <Text style={styles.buttonText}>Aplicar</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: COLORS.PRIMARY[2],
    borderRadius: 12,
    padding: 10,
  },
  wrapperButtons: {
    paddingVertical: 10,
    flexDirection: "row",
    alignSelf: "flex-end",
    gap: 8,
  },
  button: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 110,
  },
  buttonText: {
    color: COLORS.TEXT_COLOR[1],
    fontFamily: "Poppins",
    fontSize: 13,
    letterSpacing: 0.3,
  },
});
