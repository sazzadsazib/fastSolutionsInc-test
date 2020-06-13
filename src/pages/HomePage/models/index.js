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
  howWeWorkData: [
    {
      image: EmpathizeIcon,
      title: 'EMPATHIZE',
      details: "Understand the user's needs and problems",
    },
    {
      image: DefineIcon,
      title: 'DEFINE',
      details: 'Analyze your observations to define the problem',
    },
    {
      image: IdateIcon,
      title: 'IDEATE',
      details: 'Think of solutions to each aspect of the problem',
    },
    {
      image: PrototypeIcon,
      title: 'PROTOTYPE',
      details: 'Develop solution prototype for each aspect of the problem',
    },
    {
      image: TestIcon,
      title: 'TEST',
      details: 'Test the product using the best solutions identified',
    },
  ],
  projects: [],
  clients: [],
  feedback: [],
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
    updateServices(state, payload) {
      //payload = list of services in array
      return { ...state, services: payload };
    },
    updateProjects(state, payload) {
      //payload array of projects;
      return { ...state, projects: payload };
    },
    updateClients(state, payload) {
      //payload array of projects;
      return { ...state, clients: payload };
    },
    updateFeedback(state, payload) {
      //payload array of projects;
      return { ...state, feedback: payload };
    },
    clearState() {
      return { ...initialState };
    },
  },
  effects: (dispatch) => ({
    async fetchServices() {
      try {
        const res = await axios.get(`${config.services}`);
        if (res.data.code === 200) {
          dispatch.homepage.updateServices(res.data?.data); //?
        } else {
          //if code is not 200 , better keep success = true and put code/status outside data
          dispatch.homepage.updateServices([]);
        }
      } catch (err) {
        console.log(err);
        //if error occurred remove all services
        dispatch.homepage.updateServices([]);
      }
    },
    async fetchProjects() {
      try {
        const res = await axios.get(`${config.projects}`);
        if (res.data.code === 200) {
          dispatch.homepage.updateProjects(res.data?.data); //?
        } else {
          //if code is not 200 , better keep success = true and put code/status outside data
          dispatch.homepage.updateProjects([]);
        }
      } catch (err) {
        console.log(err);
        //if error occurred remove all services
        dispatch.homepage.updateProjects([]);
      }
    },
    async fetchClient() {
      try {
        let res = await axios.get(`${config.clients}`);
        // There is a problem with your data please check , a "," missing in the json. I cannot parse it I am doing it manually
        res = {
          code: 200,
          messages: [],
          data: [
            {
              id: 1, // give a comma here in your api
              logo:
                'https://fastsolutioninc.s3.ap-south-1.amazonaws.com/homepage/our-clients/google.png',
            },
            {
              id: 2, //same
              logo:
                'https://fastsolutioninc.s3.ap-south-1.amazonaws.com/homepage/our-clients/yahoo.png',
            },
            {
              id: 3, //same
              logo:
                'https://fastsolutioninc.s3.ap-south-1.amazonaws.com/homepage/our-clients/twitter.png',
            },
            {
              id: 4, //added this to show arrow
              logo:
                'https://fastsolutioninc.s3.ap-south-1.amazonaws.com/homepage/our-clients/yahoo.png',
            },
          ],
          // I am adding another client because react-slick dont show arrow when clients.length === slideToshow,
          // it has to be more than the length, since slide to show in mockup is 3 and also clients are 3 so, I added one
        };
        if (res.code === 200) {
          dispatch.homepage.updateClients(res?.data); //?
        } else {
          //if code is not 200 , better keep success = true and put code/status outside data
          dispatch.homepage.updateClients([]);
        }
      } catch (err) {
        console.log(err);
        //if error occurred remove all services
        dispatch.homepage.updateClients([]);
      }
    },
    async fetchFeedback() {
      try {
        const res = await axios.get(`${config.feedback}`);
        if (res.data.code === 200) {
          dispatch.homepage.updateFeedback(res.data?.data); //?
        } else {
          //if code is not 200 , better keep success = true and put code/status outside data
          dispatch.homepage.updateFeedback([]);
        }
      } catch (err) {
        console.log(err);
        //if error occurred remove all services
        dispatch.homepage.updateFeedback([]);
      }
    },
  }),
};
