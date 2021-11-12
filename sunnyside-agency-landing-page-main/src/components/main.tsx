import { Gallery, SectionOne, SectionTwo, Testimony } from "components";
import yellow from 'assets/images/desktop/image-transform.jpg';
import pink from 'assets/images/desktop/image-stand-out.jpg';
import left from 'assets/images/desktop/image-graphic-design.jpg';
import right from 'assets/images/desktop/image-photography.jpg';
import avatarEmily from 'assets/images/image-emily.jpg';
import avatarJennie from 'assets/images/image-jennie.jpg';
import avatarThomas from 'assets/images/image-thomas.jpg';

export const Main = () => {
  const data = [
    {
      img: left,
      title: 'Graphic design',
      desc: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
    },
    {
      img: right,
      title: 'Photography',
      desc: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
    },
  ]

  const testi = [
    {
      img: avatarEmily,
      name: 'Emily R.',
      occupation: 'Marketing Director',
      message: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    },
    {
      img: avatarThomas,
      name: 'Thomas S.',
      occupation: 'Chief Operating Officer',
      message: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    },
    {
      img: avatarJennie,
      name: 'Jennie F.',
      occupation: 'Business Owner',
      message: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    },
  ]
  return (
  <main>
    <SectionOne image={yellow}>
      <h2>Transform your brand</h2>
      <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
      <a href="/">learn more</a>
    </SectionOne>
    <SectionOne className="reverse" image={pink}>
      <h2>Stand out to the right audience</h2>
      <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
      <a className="link--pink" href="/">learn more</a>
    </SectionOne>
    <SectionTwo data={data} />
    <Testimony data={testi} />
    <Gallery />
  </main>
)};
