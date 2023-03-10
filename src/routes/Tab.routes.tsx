import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "styled-components";
import { Home } from "../screens/Home";
import { Search } from "../screens/Search";

import { Octicons } from "@expo/vector-icons";
import { theme } from "../theme/global";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: theme.colors.dark,
          paddingHorizontal: 73,
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.TabBarItem}>
              <Octicons
                name="home"
                size={24}
                color={focused ? theme.colors.white : theme.colors.gray500}
              />
              <Text
                style={focused ? styles.TabBarLabelFocus : styles.TabBarLabel}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.TabBarItem}>
              <Octicons
                name="search"
                size={24}
                color={focused ? theme.colors.white : theme.colors.gray500}
              />
              <Text
                style={focused ? styles.TabBarLabelFocus : styles.TabBarLabel}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  TabBarItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  TabBarLabelFocus: {
    fontFamily: theme.fontFamily.semibold,
    fontSize: theme.fontSize.xs,
    color: theme.colors.white,
    marginLeft: 6,
  },
  TabBarLabel: {
    fontFamily: theme.fontFamily.light,
    fontSize: theme.fontSize.xs,
    color: theme.colors.gray500,
    marginLeft: 6,
  },
});
