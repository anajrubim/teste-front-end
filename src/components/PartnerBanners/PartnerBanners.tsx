import partner from '../../assets/partner.jpg';
import './PartnerBanners.scss';

export function PartnerBanners() {
  return (
    <section className="partners container" aria-label="Parceiros">
      {[1, 2].map((n) => (
        <article key={n} className="partners__card" style={{ backgroundImage: `url(${partner})` }}>
          <h2 className="partners__title">Parceiros</h2>
          <p className="partners__text">Lorem ipsum dolor sit amet, consectetur</p>
          <a className="partners__cta" href="#">Confira</a>
        </article>
      ))}
    </section>
  );
}
