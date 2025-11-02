import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { colors } from "../constants/color";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  console.log("Current color scheme:", colorScheme);

  const theme = colors[colorScheme] ?? colors.dark;

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.title, // use theme color instead of fixed #333
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="contact" options={{ title: "Contact" }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
