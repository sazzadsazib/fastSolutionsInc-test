const devUrl = 'https://a78jxjm1ke.execute-api.eu-west-1.amazonaws.com';
const productionUrl = 'https://a78jxjm1ke.execute-api.eu-west-1.amazonaws.com';
const stagingUrl = 'https://a78jxjm1ke.execute-api.eu-west-1.amazonaws.com';
const status = 'dev';
const url =
  status === 'production'
    ? productionUrl
    : status === 'staging'
    ? stagingUrl
    : devUrl;

const config = () => {
  return {
    services: `${url}/beta/service-list`,
    projects: `${url}/beta/our-projects`,
    clients: `${url}/beta/our-clients`,
    feedback: `${url}/beta/client-feedbacks`,
  };
};

export default config();
