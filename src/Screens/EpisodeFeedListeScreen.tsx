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

import { useEpisodes } from "../Lib/Episode";
import EpisodeCard from "../Components/EpisodeCard";
const EpisodeFeedListeScreen = ({ navigation }: any) => {
  const goBack = () => navigation.goBack();

  const { data, error, isLoading } = useEpisodes();
  console.log(data);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Button title="Retour" onPress={goBack} />

      <View style={styles.container}>
        <FlatList
          data={data.results}
          renderItem={({ item }) => {
            return <EpisodeCard item={item} />;
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

export default EpisodeFeedListeScreen;
