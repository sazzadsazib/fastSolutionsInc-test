import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import NavbarComponent from '../../component/NavbarComponent';
import CoverContent from './components/CoverContent';
import Services from './components/Services';
import Loader from '../../component/Loader';
import HowWeWork from './components/HowWeWork';

interface services {
  title: string;
  logo: string;
}
interface howWeWorkProps {
  image: string;
  title: string;
  details: string;
}

interface props {
  locale: string;
  updateLocale: (locale: string) => void;
  fetchServices: () => void;
  globalLoader: boolean;
  services: services[];
  howWeWorkData: howWeWorkProps[];
}

const HomePage: React.FC<props> = ({
  locale,
  updateLocale,
  fetchServices,
  globalLoader,
  services,
  howWeWorkData,
}) => {
  const [loader, setLoader] = useState(true);
  //this is initial loader but main loader comes from redux plugin If we dont use it loader will start from false true false.

  useEffect(() => {
    fetchServices();
    //this is your component did mount

    setLoader(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {(loader || globalLoader) && <Loader />}
      {/*locale used for translation*/}
      <NavbarComponent locale={locale} updateLocale={updateLocale} />
      <CoverContent />
      <Services data={services} />
      <HowWeWork data={howWeWorkData}/>
      <div>rest of the things</div>
    </div>
  );
};

const mapState = (state: any) => ({
  locale: state.homepage.locale,
  globalLoader: state.loading.global,
  services: state.homepage.services,
  howWeWorkData: state.homepage.howWeWorkData,
});
const mapDispatch = (dispatch: any) => ({
  updateLocale: (payload: string) => dispatch.homepage.updateLocale(payload),
  fetchServices: () => dispatch.homepage.fetchServices(),
});
const HomePageContainer = connect(mapState, mapDispatch)(HomePage);

export default HomePageContainer;
