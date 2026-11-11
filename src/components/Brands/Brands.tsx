import { Carousel } from '../Carousel/Carousel';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import aoro from '../../assets/brands/aoro.png';
import camil from '../../assets/brands/camil.png';
import grano from '../../assets/brands/grano.png';
import './Brands.scss';

const brands = [
  { name: "A'Oro", logo: aoro }, { name: 'Camil', logo: camil }, { name: 'Grano', logo: grano },
  { name: "A'Oro", logo: aoro }, { name: 'Camil', logo: camil }, { name: 'Grano', logo: grano },
];

export function Brands() {
  return (
    <section className="brands container" aria-labelledby="brands-title">
      <SectionHeading id="brands-title" title="Navegue por marcas" />
      <Carousel label="Marcas" className="brands__carousel">
        {brands.map((b, i) => (
          <a key={i} href="#" className="brands__item" aria-label={b.name}><img src={b.logo} alt={b.name} loading="lazy" /></a>
        ))}
      </Carousel>
    </section>
  );
}
