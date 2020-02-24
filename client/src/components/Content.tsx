import React, { useState } from "react";
import { Grid } from "./Grid";

export type Config = boolean[][];
const allEmptyConfig = Array(10).fill(0).map(_ => {
  return Array(10).fill(false);
});

export const Content = () => {
  const [currentConfig, setCurrentConfig] = useState<Config>(allEmptyConfig);

  const flipCell = (rowNum: number, colNum: number) => {
    setCurrentConfig(oldConf => {
      const newConf = [...oldConf];
      newConf[rowNum][colNum] = !oldConf[rowNum][colNum];
      return newConf;
    });
  };

  return (
    <>
      <Grid config={ currentConfig }
            flipCell={ flipCell }
      />
    </>
  );
};