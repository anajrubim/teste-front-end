import { Logo } from '../Logo/Logo';
import './Header.scss';

const benefits = [
  { icon: 'fi-rr-shield-check', strong: '100% segura', before: 'Compra ', after: '' },
  { icon: 'fi-rr-truck-side', strong: 'Frete grátis', before: '', after: ' acima de R$ 200' },
  { icon: 'fi-rr-credit-card', strong: 'Parcele', before: '', after: ' suas compras' },
];
const nav = ['Todas categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do dia', 'Assinatura'];
const actions = [
  { icon: 'fi-rr-box-open-full', label: 'Meus pedidos' },
  { icon: 'fi-rr-heart', label: 'Favoritos' },
  { icon: 'fi-rr-circle-user', label: 'Minha conta' },
  { icon: 'fi-rr-shopping-cart', label: 'Carrinho' },
];

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <ul className="header__benefits">
          {benefits.map((b) => (
            <li key={b.icon}>
              <i className={`fi ${b.icon}`} aria-hidden="true" />
              <span>{b.before}<strong>{b.strong}</strong>{b.after}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="header__main container">
        <Logo />
        <form className="header__search" role="search" onSubmit={(e) => e.preventDefault()}>
          <label className="visually-hidden" htmlFor="search">Buscar produtos</label>
          <input id="search" type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Buscar"><i className="fi fi-rr-search" aria-hidden="true" /></button>
        </form>
        <ul className="header__actions">
          {actions.map((a) => (
            <li key={a.icon}><button type="button" aria-label={a.label}><i className={`fi ${a.icon}`} aria-hidden="true" /></button></li>
          ))}
        </ul>
      </div>

      <div className="container">
        <nav className="header__nav" aria-label="Principal">
          <ul>
            {nav.map((n) => (
              <li key={n} className={n === 'Ofertas do dia' ? 'is-highlight' : ''}>
                <a href="#">{n === 'Assinatura' && <i className="fi fi-rr-crown" aria-hidden="true" />}{n}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
