import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Pedidos from './pages/Pedidos';
import Cardapio from './pages/Cardapio';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/pedidos" exact component={Pedidos} />
        <Route path="/cardapio" exact component={Cardapio} />
      </Switch>
    </Router>
  );
}
