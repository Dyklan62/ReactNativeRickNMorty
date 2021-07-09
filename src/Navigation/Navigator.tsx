import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EpisodeDetailsScreen from "../Screens/EpisodeDetailsScreen";

import { AppRoute } from "./AppRoute";
import HomeScreen from "../Screens/HomeScreen";
import EpisodeFeedListeScreen from "../Screens/EpisodeFeedListeScreen";
import PersFeedListeScreen from "../Screens/PersFeedListeScreen";
import PersDetailsScreen from "../Screens/PersDetailsScreen";

const Stack = createStackNavigator();

export function Navigator() {
  return (
    <Stack.Navigator initialRouteName={AppRoute.HOME} headerMode={"none"}>
      <Stack.Screen name={AppRoute.HOME} component={HomeScreen} />

      <Stack.Screen
        name={AppRoute.EPISODE_LISTE}
        component={EpisodeFeedListeScreen}
      />

      <Stack.Screen
        name={AppRoute.PERSONNAGE_LISTE}
        component={PersFeedListeScreen}
      />

      <Stack.Screen
        name={AppRoute.EPISODE_DETAIL}
        component={EpisodeDetailsScreen}
      />

      <Stack.Screen name={AppRoute.PERS_DETAIL} component={PersDetailsScreen} />
    </Stack.Navigator>
  );
}
