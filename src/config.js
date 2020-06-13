const devUrl = 'https://v3stage-mk.getalice.ai';
const productionUrl = 'https://live-v3.getalice.ai';
const stagingUrl = 'https://v3stage.getalice.ai';
const status = 'dev';
const url =
  status === 'production'
    ? productionUrl
    : status === 'staging'
    ? stagingUrl
    : devUrl;

const config = () => {
  return {
    fetchPhone: `${url}/api/accounts/login`,
  };
};

export default config();
