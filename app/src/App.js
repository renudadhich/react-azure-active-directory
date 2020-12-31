import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import AppRouter from './router';
import { intializAuthProcess } from './utils/authentication';
intializAuthProcess();
export const store = configureStore();

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default App;
