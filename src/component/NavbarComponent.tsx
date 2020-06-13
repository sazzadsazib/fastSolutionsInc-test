import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Logo from './../assets/images/logo.svg';
import { useTranslation } from 'react-i18next';
import { getFlag } from './../utils';

interface props {
  locale: string;
  updateLocale: (locale: string) => void;
}

const NavbarComponent: React.FC<props> = ({ locale, updateLocale }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang:string) => {
    updateLocale(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <Navbar className='navbar-main' expand='lg' sticky="top">
      <Container>
        <Navbar.Brand href='/'>
          <img src={Logo} alt={'logo'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#home'>{t('nav-home')}</Nav.Link>
            <Nav.Link href='#link'>{t('nav-about-us')}</Nav.Link>
            <Nav.Link href='#link'>{t('nav-services')}</Nav.Link>
            <Nav.Link href='#link'>{t('nav-portfolio')}</Nav.Link>
            <Nav.Link href='#link'>{t('nav-contact-us')}</Nav.Link>
            <NavDropdown
              title={
                <span>
                  <img src={getFlag(locale)} width={30} alt={'flag'} />{' '}
                </span>
              }
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item onClick={() => changeLanguage('en')}>
                <img src={getFlag('en')} width={30} alt={'flag'} /> English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage('bn')}>
                <img src={getFlag('bn')} width={30} alt={'flag'} /> বাংলা
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarComponent;
