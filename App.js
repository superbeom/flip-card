import React from "react";

import { GameProvider } from "./src/context/GameContext";
import AppStack from "./src/stacks/AppStack";

export default () => (
  <GameProvider>
    <AppStack />
  </GameProvider>
);
