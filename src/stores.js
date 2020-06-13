import { init } from '@rematch/core';
import createRematchPersist from '@rematch/persist';
import createLoadingPlugin from '@rematch/loading';
import createEncryptor from 'redux-persist-transform-encrypt';
import { homepage } from './pages/HomePage/models';

const encryptor = createEncryptor({
  secretKey: process.env.REACT_APP_SECRET_KEY,
  onError: function (error) {
    console.log(error);
  },
});

const loading = createLoadingPlugin({});

const persistPlugin = createRematchPersist({
  key: 'fast-pay',
  whitelist: ['homepage'],
  throttle: 100,
  version: 1,
  transforms: [encryptor],
});

const models = {
  homepage,
};

const store = init({
  models,
  plugins: [persistPlugin, loading],
});

export default store;
