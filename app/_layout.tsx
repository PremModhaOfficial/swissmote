import { Stack } from "expo-router";
import "./gloabal.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
