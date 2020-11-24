import React, { useState, useEffect } from "react";
import { Asset } from "expo-asset";

import { GameProvider } from "./src/context/GameContext";
import AppStack from "./src/stacks/AppStack";

import Loader from "./src/components/Loader";

export default () => {
  const [loaded, setLoaded] = useState(false);

  const preLoad = async () => {
    try {
      await Asset.loadAsync([require("./assets/icon.png")]);

      setLoaded(true);
    } catch (error) {
      console.log("Error @preLoad_App: ", error.message);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return loaded ? (
    <GameProvider>
      <AppStack />
    </GameProvider>
  ) : (
    <Loader />
  );
};
