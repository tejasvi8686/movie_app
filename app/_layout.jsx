import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";


const RootLayout = () => {


  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="SelectGenresScreen"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default RootLayout;
