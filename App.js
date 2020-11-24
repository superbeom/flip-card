import React, { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import AsyncStorage from "@react-native-community/async-storage";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";

import apolloClientOptions from "./apollo";

import { GameProvider } from "./src/context/GameContext";
import AppStack from "./src/stacks/AppStack";

import Loader from "./src/components/Loader";

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const preLoad = async () => {
    try {
      /* Load Asset */
      await Asset.loadAsync([require("./assets/icon.png")]);

      /* Load Cache */
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage,
      });
      const apolloClient = new ApolloClient({
        cache,
        ...apolloClientOptions,
      });

      /* Check User Log In */
      const checkIsLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (checkIsLoggedIn === null || checkIsLoggedIn === "false") {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }

      /* Set State */
      setLoaded(true);
      setClient(apolloClient);
    } catch (error) {
      console.log("Error @preLoad_App: ", error.message);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return loaded && client && isLoggedIn !== null ? (
    <ApolloProvider client={client}>
      <GameProvider>
        {isLoggedIn === true ? <AppStack /> : <Loader />}
      </GameProvider>
    </ApolloProvider>
  ) : (
    <Loader />
  );
};
