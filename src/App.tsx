import React from 'react';
import "./App.scss";
import { HashRouter as Router } from "react-router-dom";
import { MainContentRouter, Header } from "./components";
import { pages } from "./pages";

const App: React.FC = () => {

  return (
      <div className={`app`}>
        <Router>
          <Header/>
          <MainContentRouter
            pages={pages}
          />
        </Router>
      </div>
  );
}

export default App;
