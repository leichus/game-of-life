import React, { Dispatch, SetStateAction } from "react";

interface ToolbarProps {
  decreaseWidth: () => void;
  increaseWidth: () => void;
  decreaseHeight: () => void;
  increaseHeight: () => void;
  advanceOneFrame: () => void;
  isPlaying: boolean;
  toggleIsPlaying: () => void;
  delay: number;
  setDelay: Dispatch<SetStateAction<number>>;
}

export const Toolbar = (props: ToolbarProps) => {
  return (
    <div className="toolbar">
      <div className="toolbar-row-section">
        <button onClick={ props.decreaseWidth }>-</button>
        <div>Change Width</div>
        <button onClick={ props.increaseWidth }>+</button>
      </div>
      <div className="toolbar-row-section">
        <button onClick={ props.decreaseHeight }>-</button>
        <div>Change Height</div>
        <button onClick={ props.increaseHeight }>+</button>
      </div>
      <div className="toolbar-row-section">
        <div>Next Frame</div>
        <button onClick={ props.advanceOneFrame }><span role="img" aria-label="skip">»</span></button>
      </div>
      <div className="toolbar-row-section">
        <div>{ props.isPlaying ? 'Pause' : 'Play' }</div>
        <button onClick={ props.toggleIsPlaying }><span role="img" aria-label="play">{ props.isPlaying ? '‖' : '▶' }</span></button>
      </div>
      <div className="toolbar-row-section">
        <label>Delay (ms)</label>
        <input type="range"
               min="100"
               max="3000"
               step="100"
               value={ props.delay }
               onChange={ (event) => props.setDelay(Number(event.target.value)) }
        />
        <div>{ ("0" + +props.delay).slice(-4) }</div>
      </div>
    </div>
  )
};