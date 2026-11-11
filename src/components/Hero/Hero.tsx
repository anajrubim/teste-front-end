import hero from '../../assets/hero.jpg';
import './Hero.scss';

export function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }} aria-labelledby="hero-title">
      <div className="hero__content container">
        <h2 id="hero-title" className="hero__title">Venha conhecer nossas promoções</h2>
        <p className="hero__subtitle"><strong>50% Off</strong> nos produtos</p>
        <a className="hero__cta" href="#vitrine">Ver produto</a>
      </div>
    </section>
  );
}
