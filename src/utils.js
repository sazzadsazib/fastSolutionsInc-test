import usFlag from './assets/images/us.svg';
import bdFlag from './assets/images/bd.png';
export const getFlag = (name) => {
  //en or bn
  if(name  === 'bn') {
    return bdFlag;
  }else if(name === 'en') {
    return usFlag;
  }else {
    return usFlag;
  }
};
