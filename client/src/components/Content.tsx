import React, { useState } from "react";
import { Grid } from "./Grid";
import { Toolbar } from "./Toolbar";

export type Config = boolean[][];
const allEmptyConfig = Array(10).fill(0).map(() => {
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

  const increaseHeight = () => {
    if (currentConfig.length < 30) {
      setCurrentConfig(config => [...config, Array(config[0].length).fill(false)]);
    }
  };

  const increaseWidth = () => {
    if (currentConfig[0].length < 30) {
      setCurrentConfig(config => config.map(row => [...row, false]));
    }
  };

  const decreaseHeight = () => {
    if (currentConfig.length > 1) {
      setCurrentConfig(config => config.slice(0, config.length - 1));
    }
  };

  const decreaseWidth = () => {
    if (currentConfig[0].length > 1) {
      setCurrentConfig(config => config.map(row => row.slice(0, row.length - 1)));
    }
  };

  const advanceOneFrame = () => {
    setCurrentConfig(oldConfig => {
      const newConfig = [...oldConfig.map(row => [...row])];

      const numRows = newConfig.length;
      const numCols = newConfig[0].length;
      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {

          const topLeft = (row > 0 && col > 0) ? oldConfig[row - 1][col - 1] : false;
          const top = (row > 0) ? oldConfig[row - 1][col] : false;
          const topRight = (row > 0 && col + 1 < numCols) ? oldConfig[row - 1][col + 1] : false;
          const left = (col > 0) ? oldConfig[row][col - 1] : false;
          const self = oldConfig[row][col];
          const right = (col + 1 < numCols) ? oldConfig[row][col + 1] : false;
          const bottomLeft = (row + 1 < numRows && col > 0) ? oldConfig[row + 1][col - 1] : false;
          const bottom = (row + 1 < numRows) ? oldConfig[row + 1][col] : false;
          const bottomRight = (row + 1 < numRows && col + 1 < numCols) ? oldConfig[row + 1][col + 1] : false;

          const sumNeighbors = [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight]
            .reduce((accum, bool) => accum + +bool, 0);

          if (!self && sumNeighbors === 3) {
            newConfig[row][col] = true;
          } else if (self && sumNeighbors !== 2 && sumNeighbors !== 3) {
            newConfig[row][col] = false;
          }
        }
      }

      return newConfig;
    })
  };

  return (
    <div className="content">
      <Grid config={ currentConfig }
            flipCell={ flipCell }
      />
      <Toolbar decreaseWidth={ decreaseWidth }
               increaseWidth={ increaseWidth }
               decreaseHeight={ decreaseHeight }
               increaseHeight={ increaseHeight }
               advanceOneFrame={ advanceOneFrame }
      />
    </div>
  );
};