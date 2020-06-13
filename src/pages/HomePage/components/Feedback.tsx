import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import rightIcon from './../../../assets/images/arrow-right-feedback.svg';
import leftIcon from './../../../assets/images/arrow-left-feedback.svg';

interface feedbackProps {
  id: number;
  client_name: string;
  client_designation: string;
  business_name: string;
  client_photo: string;
  feedback: string;
}

interface props {
  data: feedbackProps[];
}

const Feedback: React.FC<props> = ({ data }) => {
  const [currIdx, setCurrIdx] = React.useState(0);
  const [hideFeedback, setHideFeedback] = React.useState(false);

  return (
    <Container>
      <Row className='feedback-container'>
        <Col xs={12} sm={4}>
          <p className='feedback-container__title'>CLIENT FEEDBACKS</p>
          <p className='feedback-container__subtitle'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eosipscing.
          </p>
        </Col>
        <Col xs={{ span: 12, offset: 0 }} sm={{ span: 7, offset: 1 }}>
          {!!data && data?.length > 0 && (
            <div
              className={
                hideFeedback
                  ? 'feedback-users-card opacity-none'
                  : 'feedback-users-card opacity-one'
              }
            >
              <div className='flex align-items-center mb-20px'>
                <img
                  src={data[currIdx].client_photo}
                  alt={`client-${currIdx}`}
                  style={{ width: 80, marginRight: 40 }}
                />
                <div>
                  <p className='feedback-users-card__author-name'>
                    {data[currIdx].client_name}
                  </p>
                  <p className='feedback-users-card__author-details'>
                    {data[currIdx].client_designation},{' '}
                    {data[currIdx].business_name}
                  </p>
                </div>
              </div>
              <p className='feedback-users-card__author-feedback'>
                {data[currIdx].feedback}
              </p>
            </div>
          )}
          {(!data || data?.length === 0) && (
            <div className='feedback-container__title'>
              No Feedback Available
            </div>
          )}
          <div className='feedback-nav'>
            <img
              src={leftIcon}
              alt={'left-Icon'}
              onClick={() => {
                setHideFeedback(true);
                setTimeout(() => {
                  setHideFeedback(false);
                  let currUpdatedIndex = currIdx - 1;
                  if (currUpdatedIndex < 0) {
                    currUpdatedIndex = data.length - 1;
                  }
                  setCurrIdx(currUpdatedIndex);
                }, 500);
              }}
              className='feedback-nav__left-icon'
            />{' '}
            &nbsp; &nbsp;{' '}
            <img
              className='feedback-nav__right-icon'
              src={rightIcon}
              onClick={() => {
                setHideFeedback(true);
                setTimeout(() => {
                  setHideFeedback(false);
                  setCurrIdx((currIdx + 1) % data.length);
                }, 500);
              }}
              alt={'right-Icon'}
            />{' '}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Feedback;
