import React from 'react';
import logo from '../img/Game_of_life_animated_glider.gif';
import '../styles/App.scss';
import { Content } from "./Content";

export const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <div>The Game of Life</div>
      </header>
      <Content />
    </div>
  );
};

