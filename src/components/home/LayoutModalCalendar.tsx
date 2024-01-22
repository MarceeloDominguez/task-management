import React from "react";
import {
  GestureResponderEvent,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";

type Props = {
  children: React.ReactNode;
  isOpenModal: boolean;
  onPress: (e: GestureResponderEvent) => void;
};

export default function LayoutModalCalendar({
  children,
  isOpenModal,
  onPress,
}: Props) {
  return (
    <Modal visible={isOpenModal} transparent animationType="fade">
      <Pressable onPress={onPress} style={styles.wrapperChildren}>
        {children}
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrapperChildren: {
    backgroundColor: "rgba(28, 28, 28, 0.6)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
