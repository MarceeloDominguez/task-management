import React from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LabelTextInput from "../ui/LabelTextInput";
import CustomTextInput from "../ui/CustomTextInput";
import CustomButton from "../ui/CustomButton";
import { COLORS } from "../../constants/colors";

type Props = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalEditSubTask({
  modalVisible,
  setModalVisible,
}: Props) {
  return (
    <Modal visible={modalVisible} transparent animationType="fade">
      <Pressable
        style={styles.wrapperChildren}
        onPress={() => setModalVisible(false)}
      >
        <View style={styles.contentModal}>
          <LabelTextInput label="Subtask" />
          <CustomTextInput placeholder="Escriba una subtarea" />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.containerCheckBox}
          >
            <View style={styles.wrapperCheckBox}>
              <View style={styles.checkBox} />
            </View>
            <Text style={styles.textCheckBox}>Tarea completa</Text>
          </TouchableOpacity>
          <CustomButton
            buttonTitle="Editar"
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrapperChildren: {
    backgroundColor: COLORS.PRIMARY[2],
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentModal: {
    backgroundColor: COLORS.PRIMARY[1],
    width: "90%",
    padding: 14,
    borderRadius: 12,
  },
  textCheckBox: {
    fontFamily: "PoppinsSemiBold",
    color: COLORS.TEXT_COLOR[1],
    fontSize: 12,
    top: 1,
  },
  containerCheckBox: {
    flexDirection: "row",
    marginBottom: 14,
    alignItems: "center",
    gap: 8,
    justifyContent: "flex-end",
  },
  wrapperCheckBox: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    borderWidth: 1,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  checkBox: {
    backgroundColor: "red",
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
  },
});
