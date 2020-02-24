import { Config } from "./Content";
import React from "react";

interface GridConfig {
  config: Config;
  flipCell: (rowNum: number, colNum: number) => void;
}

export const Grid = (props: GridConfig) => {
  return (
    <div className="grid">
      {
        props.config.map((row, rowNum) => {
          return (
            <div className="board-row" key={ rowNum }>
              {
                row.map((cell, colNum) => {
                  return (
                    <div className={ `board-cell cell-${ cell ? 'filled' : 'unfilled' }` }
                         onClick={ () => props.flipCell(rowNum, colNum) }
                         key={ colNum }
                    >
                      { /*for debugging*/ }
                      { `${ rowNum },${ colNum }` }
                    </div>
                  );
                })
              }
            </div>
          );
        })
      }
    </div>
  );
};