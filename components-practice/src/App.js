import { useState } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import CreateGame from "./components/CreateGame"
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [page, setPage] = useState('/home');

  const router = {
    '/home': <WelcomeWorld />,
    '/games': <GameCatalog />,
    '/create-game': <CreateGame />,
    '/login': <Login />,
    '/register': <Register />,
  };

  const navigationChangeHandler = (e) => {
    e.preventDefault();

    if (e.target.tagName == 'A') {
      let url = new URL(e.target.href);
      let pathName = url.pathname;

      setPage(pathName);
    }
  }

  return (
    <div id="box">
      <Header navigationChangeHandler={navigationChangeHandler} />
      <main id="main-content">
        {router[page] || <ErrorPage />}
      </main>
    </div>
  );
}

export default App;
