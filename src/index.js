import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './Routes'; // Importez votre composant racine avec les routes
import { Provider } from 'react-redux';
import store from './Components/store'; // Importez votre store Redux

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);
