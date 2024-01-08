import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen, HomeScreen, SearchScreen } from "../../screens";
import { COLORS } from "../../constants/colors";
import { RootMainStackParamsList } from "../type";

const Stack = createNativeStackNavigator<RootMainStackParamsList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ animation: "fade" }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShadowVisible: false,
          headerTitle: "Se productivo hoy 🚀",
          headerTitleStyle: { color: COLORS.TEXT_COLOR[1] },
          headerStyle: { backgroundColor: COLORS.PRIMARY[1] },
        }}
      />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
