import React from 'react';
import { GameList } from 'components/GameList';
import { GameDetails } from 'pages/GameDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <GameList />
        </Route>
        <Route path="/games/:slug" exact>
          <GameDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
