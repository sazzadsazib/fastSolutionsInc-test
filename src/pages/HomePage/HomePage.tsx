import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import NavbarComponent from '../../component/NavbarComponent';
import CoverContent from './components/CoverContent';
import Services from './components/Services';
import Loader from '../../component/Loader';
import HowWeWork from './components/HowWeWork';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Feedback from './components/Feedback';
import GetInTouch from './components/GetInTouch';
import Footer from './Footer';
import StickyTop from './components/StickyTop';

interface services {
  title: string;
  logo: string;
}
interface howWeWorkProps {
  image: string;
  title: string;
  details: string;
}
interface projectsProps {
  title: string;
  illustration: string;
  description: string;
}
interface clientsProps {
  id: number;
  logo: string;
}
interface feedbackProps {
  id: number;
  client_name: string;
  client_designation: string;
  business_name: string;
  client_photo: string;
  feedback: string;
}
interface props {
  locale: string;
  updateLocale: (locale: string) => void;
  fetchServices: () => void;
  globalLoader: boolean;
  services: services[];
  howWeWorkData: howWeWorkProps[];
  fetchProjects: () => void;
  projects: projectsProps[];
  fetchClient: () => void;
  clients: clientsProps[];
  fetchFeedback: () => void;
  feedback: feedbackProps[];
}

const HomePage: React.FC<props> = ({
  locale,
  updateLocale,
  fetchServices,
  globalLoader,
  services,
  howWeWorkData,
  fetchProjects,
  projects,
  fetchClient,
  clients,
  fetchFeedback,
  feedback,
}) => {
  const [loader, setLoader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  //this is initial loader but main loader comes from redux plugin If we dont use it loader will start from false true false.

  useEffect(() => {
    fetchServices();
    fetchProjects();
    fetchClient();
    fetchFeedback();
    //this is your component did mount
    setLoader(false);
    window.addEventListener('scroll', () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (winScroll / height) * 100;

      if (scrolled > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
    return window.removeEventListener('scroll', () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (winScroll / height) * 1000;

      if (scrolled > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    // eslint-disable-next-line
  }, []);

  return (
    <div id='home'>
      {(loader || globalLoader) && <Loader />}
      {/*locale used for translation*/}
      <NavbarComponent locale={locale} updateLocale={updateLocale} />
      <CoverContent />
      <Services data={services} />
      <HowWeWork data={howWeWorkData} />
      <Projects data={projects} />
      <Clients data={clients} />
      <Feedback data={feedback} />
      <GetInTouch />
      <Footer />
      {isScrolled && <StickyTop />}
    </div>
  );
};

const mapState = (state: any) => ({
  locale: state.homepage.locale,
  globalLoader: state.loading.global,
  services: state.homepage.services,
  howWeWorkData: state.homepage.howWeWorkData,
  projects: state.homepage.projects,
  clients: state.homepage.clients,
  feedback: state.homepage.feedback,
});
const mapDispatch = (dispatch: any) => ({
  updateLocale: (payload: string) => dispatch.homepage.updateLocale(payload),
  fetchServices: () => dispatch.homepage.fetchServices(),
  fetchProjects: () => dispatch.homepage.fetchProjects(),
  fetchClient: () => dispatch.homepage.fetchClient(),
  fetchFeedback: () => dispatch.homepage.fetchFeedback(),
});
const HomePageContainer = connect(mapState, mapDispatch)(HomePage);

export default HomePageContainer;
