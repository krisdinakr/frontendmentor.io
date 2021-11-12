import { FC } from "react";

interface CardProps {
  img: string,
  name: string,
  occupation: string,
  message: string,
}

export const Card: FC<CardProps> = ({ img, name, occupation, message }) => (
  <div className="card">
    <img className="card__img" src={img} alt="" />
    <div className="card__body">
      <p className="card__text">
      {message}
      </p>
      <h4 className="card__title">
      {name}
      </h4>
      <p className="card__text">
        <small className="card__small">{occupation}</small>
      </p>
    </div>
  </div>
);
