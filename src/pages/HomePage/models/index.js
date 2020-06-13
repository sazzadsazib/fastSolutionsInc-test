// import axios from 'axios';
// import config from '../../../config';

const initialState = {
  data: false,
};

export const homepage = {
  state: {
    ...initialState,
  },
  reducers: {
    defaultReducer(state, payload) {
      return { ...state, hasPhoneNo: payload };
    },
    clearState() {
      return { ...initialState };
    },
  },
  effects: (dispatch) => ({
    async fetchPhoneInfo(payload) {
      /*
        payload= { define }
       */
      try {
        dispatch.homepage.defaultReducer(false);
      } catch (err) {
        console.log(err);
      }
    },
  }),
};
