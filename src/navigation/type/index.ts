import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootMainStackParamsList = {
  HomeScreen: undefined;
  DetailsScreen: undefined;
  SearchScreen: undefined;
};

export type UseNavigation = NativeStackNavigationProp<RootMainStackParamsList>;
