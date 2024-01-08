import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./main";

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
