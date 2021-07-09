import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { AppRoute } from "../Navigation/AppRoute";

const HomeScreen = ({ navigation }: any) => {
  const goToEp = () => navigation.navigate(AppRoute.EPISODE_LISTE);
  const goToPers = () => navigation.navigate(AppRoute.PERSONNAGE_LISTE);

  return (
    <View style={styles.margin}>
      <Text>RickN Morty Episode App</Text>
      <View style={styles.button}>
        <Button title="Liste des épisodes" onPress={goToEp} />
      </View>
      <View style={styles.button}>
        <Button title="Liste des personnages" onPress={goToPers} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  margin: {
    marginTop: 100,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button: {
    marginTop: 20,
  },
});
export default HomeScreen;
