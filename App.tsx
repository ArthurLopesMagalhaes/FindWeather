import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Overpass_300Light,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold,
} from "@expo-google-fonts/overpass";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme/global";
import { Background } from "./src/components/Background";
import { Welcome } from "./src/screens/Welcome";

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
        <Welcome />
      </ThemeProvider>
    </>
  );
}
