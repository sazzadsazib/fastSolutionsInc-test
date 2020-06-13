import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import CoverContentImage from '../../../assets/images/cover_content.svg';

interface props {}

const CoverContent: React.FC<props> = () => {
  return (
    <div className='cover-container'>
      <Container>
        <Row>
          <Col sm={12} md={7} className={'converinfo-container'}>
            <h1 className='converinfo-container__title'>Transforming Business Using Technology</h1>
            <p className='converinfo-container__subtitle'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no.
            </p>
            <div className="flex">
                <Button variant="info">Explore</Button> &nbsp;&nbsp;&nbsp;&nbsp; <Button variant='outline-info'>Contact Us</Button>
            </div>
          </Col>
          <Col sm={{span: 4, offset: 0}} md={5} className='flex flex-center'>
            <img className='responsive-cover' src={CoverContentImage} alt={'cover'} width={'100%'} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CoverContent;
