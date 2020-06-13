import React from 'react';
import Icon from './../../../assets/images/scrolltop.svg';

interface props {}

const StickyTop: React.FC<props> = () => {
  return (
    <div
      className='sticky-scroll-to-top__button'
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <img src={Icon} alt={'scroll icon'} />
      <p>Scroll Up</p>
    </div>
  );
};
export default StickyTop;
