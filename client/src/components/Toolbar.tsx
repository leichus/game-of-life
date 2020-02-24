import React from "react";

interface ToolbarProps {
  decreaseWidth: () => void;
  increaseWidth: () => void;
  decreaseHeight: () => void;
  increaseHeight: () => void;
}

export const Toolbar = (props: ToolbarProps) => {
  return (
    <div className="toolbar">
      <div className="toolbar-row">
        <button onClick={ props.decreaseWidth }>-</button>
        <div>Change Width</div>
        <button onClick={ props.increaseWidth }>+</button>
      </div>
      <div className="toolbar-row">
        <button onClick={ props.decreaseHeight }>-</button>
        <div>Change Height</div>
        <button onClick={ props.increaseHeight }>+</button>
      </div>
    </div>
  )
};