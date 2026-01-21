import { Prompt_400Regular, Prompt_700Bold, useFonts } from "@expo-google-fonts/prompt";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Prompt_400Regular,
    Prompt_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            fontFamily: "Prompt_700Bold",
            color: '#2d98e4',
          },
        }}
      />
      <Stack.Screen
        name="bmi"
        options={{
          headerTitle: "BMI Calculator",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            fontFamily: "Prompt_700Bold",
            color: '#2d98e4',
          },
        }}
      />
    </Stack>
  );
}
