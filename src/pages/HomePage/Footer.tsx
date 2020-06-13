import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Logo from './../../assets/images/logo.svg';
import FB from './../../assets/images/social/fb.svg';
import Twitter from './../../assets/images/social/twitter.svg';
import Insta from './../../assets/images/social/instagram.svg';
import LinkedIn from './../../assets/images/social/linkedin.svg';
import Yt from './../../assets/images/social/youtube.svg';

interface props {}

const Footer: React.FC<props> = () => {
  return (
    <div className='footer__container'>
      <Container>
        <Row>
          <Col xs={12} sm={4} className='flex flex-center flex-column'>
            <img className='footer__logo' src={Logo} alt={'logo'} />
            <p className='footer__subtitle'>
              Transforming Business Using Technology
            </p>
            <ul className='footer__social-links'>
              <li>
                <a href='/' target='_blank'>
                  <img src={FB} alt={'fb'} />
                </a>
              </li>
              <li>
                <a href='/' target='_blank'>
                  <img src={Twitter} alt={'twitter'} />
                </a>
              </li>
              <li>
                <a href='/' target='_blank'>
                  <img src={LinkedIn} alt={'linkedin'} />
                </a>
              </li>
              <li>
                <a href='/' target='_blank'>
                  <img src={Insta} alt={'Instagram'} />
                </a>
              </li>
              <li>
                <a href='/' target='_blank'>
                  <img src={Yt} alt={'youtube'} />
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={{ span: 3, offset: 1 }}>
            <p className='footer__nav-header'>CONTACT US</p>
            <Nav className='footer__nav-list flex-column'>
              <Nav.Link>US: +1 (202) 555-0156</Nav.Link>
              <Nav.Link>BD: +88 (019) 5599-0000</Nav.Link>
              <Nav.Link>IQ: +964 (751) 123-4567</Nav.Link>
              <Nav.Link>US: +1 (202) 555-0156</Nav.Link>
              <Nav.Link>contact@fastsolutioninc.com</Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} sm={{ span: 3, offset: 1 }}>
            <p className='footer__nav-header'>USEFUL LINKS</p>
            <Nav className='footer__nav-list flex-column'>
              <Nav.Link href='/about'>About Us</Nav.Link>
              <Nav.Link href='/blogs'>Our Blog</Nav.Link>
              <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
              <Nav.Link href='/workWithUs'>Work with us</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
