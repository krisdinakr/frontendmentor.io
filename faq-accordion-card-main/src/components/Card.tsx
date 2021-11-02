import Accordion from './Accordion';
import { faqs } from 'data';
// import desktopImg from 'assets/images/illustration-woman-online-desktop.svg';
// import mobileImg from 'assets/images/illustration-woman-online-mobile.svg';
import box from 'assets/images/illustration-box-desktop.svg';
import { useEffect, useState } from 'react';

export const Card = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  const updateMedia = () => setIsDesktop(window.innerWidth > 992);

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <div className="card">
      <div className="card__image">
        <div className="card__bg-1"></div>
        <div className="card__bg-2"></div>
      </div>
      {isDesktop && (
        <div className="card__wrapper">
          <img src={box} alt="" className="card__box" />
        </div>
      )}
      <div className="card__body">
        <h1 className="card__header">FAQ</h1>
        <Accordion data={faqs} />
      </div>
    </div>
  );
};
