import React, { useState, useEffect } from "react";
import { Asset } from "expo-asset";
import AsyncStorage from "@react-native-community/async-storage";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";

import apolloClientOptions from "./apollo";

import { AuthProvider } from "./src/context/AuthContext";

import AppStack from "./src/stacks/AppStack";

import Loader from "./src/components/Loader";

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [username, setUsername] = useState(null);

  const preLoad = async () => {
    try {
      /* Testing.. */
      // await AsyncStorage.clear();

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
      const checkUsername = await AsyncStorage.getItem("username");

      if (!checkIsLoggedIn || checkIsLoggedIn === "false") {
        setIsLoggedIn(false);
      } else if (checkIsLoggedIn && checkUsername) {
        setIsLoggedIn(true);
        setUsername(checkUsername);
      }

      /* Testing.. */
      // const storageStage = JSON.parse(await AsyncStorage.getItem("stage"));
      // const storageHorizontalNum = JSON.parse(
      //   await AsyncStorage.getItem("horizontalNum")
      // );
      // const storageHeart = JSON.parse(await AsyncStorage.getItem("heart"));
      // const storageGameEnd = JSON.parse(await AsyncStorage.getItem("gameEnd"));

      // if (
      //   storageStage &&
      //   storageHorizontalNum &&
      //   storageHeart &&
      //   storageGameEnd
      // ) {
      //   console.log("Yes");
      //   console.log("storageStage: ", storageStage);
      //   console.log("storageHorizontalNum: ", storageHorizontalNum);
      //   console.log("storageHeart: ", storageHeart);
      //   console.log("storageGameEnd: ", storageGameEnd);
      // } else {
      //   console.log("No");
      // }

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
      <AuthProvider isLoggedIn={isLoggedIn} username={username}>
        <AppStack />
      </AuthProvider>
    </ApolloProvider>
  ) : (
    <Loader />
  );
};
