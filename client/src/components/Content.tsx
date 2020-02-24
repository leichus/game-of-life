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
    setCurrentConfig(oldConfig => {
      if (oldConfig.length >= 30) {
        return oldConfig;
      } else {
        const numCols = oldConfig[0].length;
        return [...oldConfig, Array(numCols).fill(false)];
      }
    });
  };

  const increaseWidth = () => {
    setCurrentConfig(oldConfig => {
      if (oldConfig[0].length >= 30) {
        return oldConfig;
      } else {
        return oldConfig.map(row => [...row, false]);
      }
    })
  };

  const decreaseHeight = () => {
    setCurrentConfig(oldConfig => {
      if (oldConfig.length <= 1) {
        return oldConfig;
      } else {
        return oldConfig.slice(0, oldConfig.length - 1);
      }
    });
  };

  const decreaseWidth = () => {
    setCurrentConfig(oldConfig => {
      if (oldConfig[0].length <= 1) {
        return oldConfig;
      } else {
        return oldConfig.map(row => row.slice(0, row.length-1))
      }
    });
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
      />
    </div>
  );
};