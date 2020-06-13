import React from 'react';
import loader from './../assets/images/loader.svg';

interface props {
}

const Loader: React.FC<props> = () => {
    return <div className='loader-main'>
        <div className="loader-main__content">
            <img src={loader} alt={'loader'} width={40}/>
        </div>
    </div>
}
;

export default Loader;
