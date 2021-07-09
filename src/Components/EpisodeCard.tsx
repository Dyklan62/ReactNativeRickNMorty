import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card, Paragraph, Title, Button } from "react-native-paper";
import { AppRoute } from "../Navigation/AppRoute";
import { useNavigation } from "@react-navigation/native";

const EpisodeCard = ({ item }: any) => {
  const navigation = useNavigation();

  const goTo = () => navigation.navigate(AppRoute.PERS_DETAIL);

  return (
    <Card style={styles.itemStyle}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>
          <Text>{item.episode}</Text>
          <Text>{item.air_date}</Text>
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={goTo}>Détail</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default EpisodeCard;
