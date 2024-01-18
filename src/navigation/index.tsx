import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./main";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootNavigation() {
  return (
    <GestureRootProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </GestureRootProvider>
  );
}

const GestureRootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
