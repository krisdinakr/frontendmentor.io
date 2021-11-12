import { FC, ReactNode } from "react";

interface SectionOneProps {
  children: ReactNode;
  image: string;
  className?: string;
}

export const SectionOne: FC<SectionOneProps> = ({ children, image, className }) => (
  <div className={className ? "section-one section-one--reverse" : "section-one"}>
    <div className="section-one__copy">
      <div className="section-one__body">
        {children}
      </div>
    </div>
    <div className="section-one__img">
      <img src={image} alt="" />
    </div>
  </div>
)