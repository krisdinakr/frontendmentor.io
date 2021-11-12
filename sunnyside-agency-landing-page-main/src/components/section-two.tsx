import { FC } from "react";

interface SectionTwoProps {
  data: {
    desc: string,
    title: string,
  }[],
}

export const SectionTwo:FC<SectionTwoProps> = ({ data }) => (
  <div className="section-two">
    {data.map((i, index) => (
      <div className="section-two__inner" key={i.title}>
        <div className={i.title === 'Graphic design' ? 'section-two__image' : 'section-two__image section-two__image--left'} />
        <div className={!index ? "section-two__copy" : "section-two__copy section-two__copy--left"}>
          <h1>{i.title}</h1>
          <p>{i.desc}</p>
        </div>
      </div>
    ))}
  </div>
);
