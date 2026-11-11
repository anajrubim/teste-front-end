import { Logo } from '../Logo/Logo';
import './Footer.scss';

const columns = [
  { title: 'Institucional', links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
  { title: 'Ajuda', links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
  { title: 'Termos', links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
];
const socials = [
  { name: 'Instagram', icon: 'fi-brands-instagram' },
  { name: 'Facebook', icon: 'fi-brands-facebook' },
  { name: 'LinkedIn', icon: 'fi-brands-linkedin' },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__inner container">
          <div className="footer__brand">
            <Logo width={164} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="footer__social" aria-label="Redes sociais">
              {socials.map((s) => <li key={s.name}><a href="#" aria-label={s.name}><i className={`fi ${s.icon}`} aria-hidden="true" /></a></li>)}
            </ul>
          </div>
          <div className="footer__cols">
            {columns.map((c) => (
              <nav key={c.title} aria-label={c.title}>
                <h2>{c.title}</h2>
                <ul>{c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
              </nav>
            ))}
          </div>
        </div>
      </div>
      <p className="footer__bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </footer>
  );
}
