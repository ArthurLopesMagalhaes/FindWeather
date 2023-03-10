import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Details } from "../screens/Details";
import { Home } from "../screens/Home";
import { Search } from "../screens/Search";
import { Welcome } from "../screens/Welcome";
import { TabRoutes } from "./Tab.routes";

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="TabRoutes">
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
