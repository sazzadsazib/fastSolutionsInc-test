import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

interface projectsProps {
  title: string;
  illustration: string;
  description: string;
}

interface props {
  data: projectsProps[];
}

const Projects: React.FC<props> = ({ data }) => {
  return (
    <div className='projects__container'>
      <p className='projects__title'>OUR PROJECTS</p>
      <Carousel controls={false}>
        {!!data &&
          data?.length > 0 &&
          data.map(({ title, illustration, description }, i) => (
            <Carousel.Item key={i} className={'w-100p'}>
              {/*its easier to understand whats happening in carousel rather than creating another component*/}
              <Container className='project-carousel'>
                <Row className='flex flex-center h-100p'>
                  <Col xs={12} sm={5} className='flex flex-center h-100p'>
                    <img
                      src={illustration}
                      alt={'illustration'}
                      style={{ width: 300 }}
                    />
                  </Col>
                  <Col xs={12} sm={{ span: 6 }}>
                    <h1 className='project-carousel__title'>{title || ''}</h1>
                    <p className='project-carousel__description'>
                      {description || ''}
                    </p>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          ))}
      </Carousel>
      {(!data || data?.length === 0) && <p>No Projects Available</p>}
    </div>
  );
};
export default Projects;
