import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ITasks } from "../../interface/tasks";

export type RootMainStackParamsList = {
  HomeScreen: undefined;
  DetailsScreen: { backgroundColor: string; item: ITasks };
  SearchScreen: undefined;
};

export type UseNavigation = NativeStackNavigationProp<RootMainStackParamsList>;
