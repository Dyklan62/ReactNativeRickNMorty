import React from "react";
import { NetworkProvider } from "react-native-offline";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";

import { Navigator } from "../Navigation/Navigator";

const queryClient = new QueryClient();

const RootScreen = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <NetworkProvider>
          <Navigator />
        </NetworkProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default RootScreen;
