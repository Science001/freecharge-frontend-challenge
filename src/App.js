import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import store from './redux/store';
import RecipesPage from './pages/RecipesPage';
import PaymentGateway from './pages/PaymentGateway';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/checkout'>
            <PaymentGateway />
          </Route>
          <Route path='/'>
            <RecipesPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
