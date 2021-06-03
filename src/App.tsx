import React from 'react';
import "./App.scss";
import { HashRouter as Router } from "react-router-dom";
import { MainContentRouter, Header } from "./components";
import { pages } from "./pages";
import { Helmet } from "react-helmet";

const App: React.FC = () => {

  return (
      <div className={`app`}>
        <Helmet>
          <title>{"H & L Concrete"}</title>
          <meta name="description" content={"H & L Concrete website"}/>
        </Helmet>
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
