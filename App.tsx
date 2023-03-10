import { StatusBar } from "expo-status-bar";
import { MainRoutes } from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme/global";

import {
  useFonts,
  Overpass_300Light,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold,
} from "@expo-google-fonts/overpass";

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_300Light,
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor={theme.colors.dark} />

      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </>
  );
}
