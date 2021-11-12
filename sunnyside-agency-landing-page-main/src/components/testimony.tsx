import { Card } from "components";
import { FC } from "react";

interface TestimonyProps {
  data: any[];
}

export const Testimony: FC<TestimonyProps> = ({ data }) => (
  <section className="testimony">
      <div className="testimony__title">
        <h3>Client testimonials</h3>
      </div>
      <div className="testimony__content">
        {data.map((i) => (
          <Card key={i.name} img={i.img} name={i.name} occupation={i.occupation} message={i.message} />
        ))}
      </div>
    </section>
)