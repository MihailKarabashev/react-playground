import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import CreateGame from "./components/CreateGame"
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import GameDetails from "./components/GameDetails";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Switch>
          <Route path='/' exact component={WelcomeWorld} />
          <Route path='/games' exact component={GameCatalog} />
          <Route path='/create-game' component={CreateGame} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/games/:gameId' component={GameDetails} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
