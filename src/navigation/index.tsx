import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./main";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ContextProvider } from "../context/contextProvider";
import { ContextSubTask } from "../context/contextSubTasks";

export default function RootNavigation() {
  return (
    <ContextProvider>
      <ContextSubTask>
        <GestureRootProvider>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </GestureRootProvider>
      </ContextSubTask>
    </ContextProvider>
  );
}

const GestureRootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
