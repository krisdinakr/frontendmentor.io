import { FC } from 'react';
import icon from 'assets/images/icon-arrow-down.svg';

interface AccordionItemProps {
  title: string;
  description: string;
  className?: string;
}

export const AccordionItem: FC<AccordionItemProps> = ({
  title,
  description,
  className,
}) => (
  <li className="accordion__item">
    <button className="accordion__title">
      {title}
      <img className="accordion__icon" src={icon} alt="" />
    </button>
    <div className="accordion__description">{description}</div>
  </li>
);
