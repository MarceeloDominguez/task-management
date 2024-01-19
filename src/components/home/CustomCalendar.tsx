import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Calendar } from "react-native-calendars";
import { COLORS } from "../../constants/colors";

type Props = {
  onPress: () => void;
};

export const CustomCalendar = ({ onPress }: Props) => {
  const [selected, setSelected] = useState("");
  console.log(selected);

  return (
    <Pressable style={styles.container}>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: COLORS.SECONDARY[1],
            selectedTextColor: COLORS.TEXT_COLOR[1],
          },
        }}
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
          onPress={onPress}
          style={[styles.button, { backgroundColor: COLORS.PRIMARY[1] }]}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </Pressable>
        <Pressable
          onPress={() => console.log("aplicar...")}
          style={[styles.button, { backgroundColor: COLORS.SECONDARY[1] }]}
        >
          <Text style={styles.buttonText}>Aplicar</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

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
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    width: 110,
  },
  buttonText: {
    color: COLORS.TEXT_COLOR[1],
    fontFamily: "Poppins",
  },
});
