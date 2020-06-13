import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ServicesCard from './Fragments/ServicesCard';

interface services {
  title: string;
  logo: string;
}

interface props {
  data: services[];
}

const Services: React.FC<props> = ({ data }) => {
  return (
    <div className='services-container' id='services'>
      <div className='services-container__highlighter' />
      <Container>
        <h1 className='services-container__title'>Services</h1>
        <p className='services-container__subtitle'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit.
        </p>
        <br />
        <Row>
          {data?.length > 0 &&
            data?.map((service, key) => (
              <ServicesCard
                key={key}
                title={service.title}
                logo={service.logo}
              />
            ))}
          {data?.length === 0 && (
            <p className='services-container__subtitle'>
              No Services Available
            </p>
          )}
        </Row>
      </Container>
    </div>
  );
};
export default Services;
