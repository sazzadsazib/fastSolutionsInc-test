import React,{Suspense} from 'react';
import { Router } from '@reach/router';
import store from './stores';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/404/NotFound';

const Routes = () => {
  return (
    <Suspense fallback=''>
    <Provider store={store}>
      <PersistGate persistor={getPersistor()}>
        <Router>
          <HomePage path='/' />
          <NotFound default />
        </Router>
      </PersistGate>
    </Provider>
    </Suspense>
  );
};

export default Routes;
