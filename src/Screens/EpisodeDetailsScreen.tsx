import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const EpisodeDetailsScreen = () => {
  return (
    <View style={styles.header}>
      <Text>Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
    margin: 50,
  },
});

export default EpisodeDetailsScreen;
