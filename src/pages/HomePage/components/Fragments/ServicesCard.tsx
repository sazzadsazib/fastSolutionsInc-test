import React from 'react';
import {Col} from 'react-bootstrap';

interface props {
    title: string;
    logo: string;
}

const ServicesCard: React.FC<props> = ({title,logo}) => {
    return <Col xs={6} sm={4}>
        <div className='services-card'>
            <img src={logo} alt={title}/>
            <p>{title}</p>
        </div>
    </Col>
}
;

export default ServicesCard;
