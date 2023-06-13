import React from "react";
import { StagesAction } from "./StagesAction";

export const StagesContext = React.createContext<{
  stages: string[];
  dispatch: React.Dispatch<StagesAction>;
}>({ stages: [], dispatch: () => {} });
