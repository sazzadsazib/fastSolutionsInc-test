import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonImage from './../../../assets/images/button-feedback.svg';

interface props {}

const GetInTouch: React.FC<props> = () => {
  return (
    <div className='get-in-touch__container'>
      <Container>
        <Row>
          <Col xs={12} sm={8}>
            <p className='get-in-touch__title'>LET'S HEAR ABOUT YOUR PROJECT</p>
            <p className='get-in-touch__subtitle'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo{' '}
            </p>
          </Col>
          <Col xs={12} sm={4} className='flex flex-center'>
            <img
              className='get-in-touch__c2a-button'
              src={ButtonImage}
              alt={'feedbackButton'}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default GetInTouch;
