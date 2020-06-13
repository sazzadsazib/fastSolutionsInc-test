import React from 'react';
import {Container} from 'react-bootstrap';
import HowWeWorkCard from './Fragments/HowWeWorkCard';

interface howWeWorkProps {
    image: string;
    title: string;
    details: string;
}
interface props {
    data: howWeWorkProps[]
}

const HowWeWork: React.FC<props> = ({data}) => {
    return <div className="how-we-work__container">
       <h1>How We Work</h1>
        <Container>
            <div className='how-we-work__container-wrapper'>
                {!!data && data.map(({image,title,details},key)=><HowWeWorkCard key={key} image={image} title={title} details={details}/>)}
            </div>
        </Container>
    </div>
}
;

export default HowWeWork;
