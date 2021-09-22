import { FC } from 'react';
import { AccordionItem } from './AccordionItem';

interface AccordionProps {
  data: any[];
}

const Accordion: FC<AccordionProps> = ({ data }) => (
  <ul className="accordion">
    {data.map((item) => (
      <AccordionItem
        key={item.key}
        title={item.title}
        description={item.description}
      />
    ))}
  </ul>
);

export default Accordion;
