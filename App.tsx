import React from "react";
import { StyleSheet } from "react-native";
import RootScreen from "./src/Screens/RootScreen";

export default function App() {
  return <RootScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
