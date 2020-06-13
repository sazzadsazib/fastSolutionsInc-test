import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import prevIcon from './../../../assets/images/arrow-left.svg';
import nextIcon from './../../../assets/images/arrow-right.svg';

interface clientsProps {
  id: number;
  logo: string;
}

interface props {
  data: clientsProps[];
}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <img src={nextIcon} alt={'next'} style={{ width: 40 }} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <img src={prevIcon} alt={'prev'} style={{ width: 40 }} />
    </div>
  );
}

const Clients: React.FC<props> = ({ data }) => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrow: true,
    slidesToShow: width > 600 ? 3 : 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className='clients-container'>
      <p>Our Clients</p>
      <Container className='mt-30px'>
        <Slider {...settings}>
          {!!data &&
            data?.length > 0 &&
            data.map(({ id, logo }) => (
              <div key={id} className='client-carousel'>
                <img src={logo} alt={`client-${id}`} style={{ width: 200 }} />
              </div>
            ))}
        </Slider>
      </Container>
      {(!data || data?.length === 0) && <p>No Clients Available</p>}
    </div>
  );
};
export default Clients;
