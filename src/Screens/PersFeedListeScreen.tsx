import React from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Button,
} from "react-native";

import { usePersonnage } from "../Lib/Personnage";
import PersCard from "../Components/PersCard";

const PersFeedListeScreen = ({ navigation }: any) => {
  const goBack = () => navigation.goBack();

  const { data, error, isLoading } = usePersonnage();

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      {console.log("pers")}
      <Button title="Retour" onPress={goBack} />
      <View style={styles.container}>
        <FlatList
          data={data.results}
          renderItem={({ item }) => {
            return <PersCard item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default PersFeedListeScreen;
