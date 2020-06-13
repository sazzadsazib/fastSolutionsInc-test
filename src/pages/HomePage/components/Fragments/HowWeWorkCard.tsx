import React from 'react';

interface props {
    image: string;
    title: string;
    details: string;
}


const HowWeWorkCard: React.FC<props> = ({image,title,details}) => {
    return <div className='how-we-work__card'>
        <div className="how-we-work__card__image-wrapper">
            <img src={image} alt={image} />
        </div>
        <p className='how-we-work__card__title'>{title}</p>
        <p className='how-we-work__card__details'>{details}</p>
    </div>
}
;

export default HowWeWorkCard;
