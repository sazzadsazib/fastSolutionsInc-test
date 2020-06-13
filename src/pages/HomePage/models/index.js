import axios from 'axios';
import config from '../../../config';
import EmpathizeIcon from './../../../assets/images/howWeWorkAssets/empathize.svg';
import DefineIcon from './../../../assets/images/howWeWorkAssets/DEFINE.svg';
import IdateIcon from './../../../assets/images/howWeWorkAssets/ideate.svg';
import PrototypeIcon from './../../../assets/images/howWeWorkAssets/prototype.svg';
import TestIcon from './../../../assets/images/howWeWorkAssets/testing.svg';

const initialState = {
  locale: 'en',
  services: [],
  howWeWorkData: [{
    image: EmpathizeIcon,
    title: "EMPATHIZE",
    details: "Understand the user's needs and problems"
  },{
    image: DefineIcon,
    title: "DEFINE",
    details: "Analyze your observations to define the problem"
  },{
    image: IdateIcon,
    title: "IDEATE",
    details: "Think of solutions to each aspect of the problem"
  },{
    image: PrototypeIcon,
    title: "PROTOTYPE",
    details: "Develop solution prototype for each aspect of the problem"
  },{
    image: TestIcon,
    title: "TEST",
    details: "Test the product using the best solutions identified"
  }]
};

export const homepage = {
  state: {
    ...initialState,
  },
  reducers: {
    updateLocale(state, payload) {
      //payload = locale
      return { ...state, locale: payload };
    },
    updateServices(state,payload) {
      //payload = list of services in array
      return { ...state, services: payload };
    },
    clearState() {
      return { ...initialState };
    },
  },
  effects: (dispatch) => ({
    async fetchServices() {
      try {
        const res  = await axios.get(`${config.services}`);
        if(res.data.code === 200) {
          dispatch.homepage.updateServices(res.data?.data); //?
        }else  {
          //if code is not 200 , better keep success = true and put code/status outside data
          dispatch.homepage.updateServices([]);
        }
      } catch (err) {
        console.log(err);
        //if error occurred remove all services
        dispatch.homepage.updateServices([]);
      }
    },
  }),
};
