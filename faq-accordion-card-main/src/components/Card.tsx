import Accordion from './Accordion';
import { faqs } from 'data';
import illustrationImg from 'assets/images/illustration-woman-online-mobile.svg';

export const Card = () => (
  <div className="card">
    <div className="card__image">
      <img src={illustrationImg} alt="" />
    </div>
    <div className="card__body">
      <h2 className="card__header">FAQ</h2>
      <Accordion data={faqs} />
    </div>
  </div>
);
