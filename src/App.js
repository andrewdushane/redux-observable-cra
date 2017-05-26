import React from 'react';
import { Provider } from 'react-redux';
import Ping from './Ping';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Ping />
  </Provider>
);

export default App;
