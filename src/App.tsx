import React from 'react';
import s from './App.module.css';
import {HashRouter} from "react-router-dom";
import Header from "./Header";
import Routes from "./Routes"

function App() {
  return (
    <div className={s.app}>
      <HashRouter>

        <Header/>

        <Routes/>

      </HashRouter>
    </div>
  );
}

export default App;
