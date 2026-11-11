import { useState } from 'react';
import tecnologia from '../../assets/categories/tecnologia.png';
import supermercado from '../../assets/categories/supermercado.png';
import bebidas from '../../assets/categories/bebidas.png';
import ferramentas from '../../assets/categories/ferramentas.png';
import saude from '../../assets/categories/saude.png';
import esportes from '../../assets/categories/esportes.png';
import moda from '../../assets/categories/moda.png';
import './Categories.scss';

const categories = [
  { name: 'Tecnologia', icon: tecnologia }, { name: 'Supermercado', icon: supermercado },
  { name: 'Bebidas', icon: bebidas }, { name: 'Ferramentas', icon: ferramentas },
  { name: 'Saúde', icon: saude }, { name: 'Esportes e Fitness', icon: esportes },
  { name: 'Moda', icon: moda },
];

export function Categories() {
  const [active, setActive] = useState('Tecnologia');
  return (
    <nav className="categories container" aria-label="Categorias">
      <ul className="categories__list">
        {categories.map(({ name, icon }) => (
          <li key={name}>
            <button type="button" className={`categories__item ${active === name ? 'is-active' : ''}`} onClick={() => setActive(name)} aria-pressed={active === name}>
              <span className="categories__icon"><img src={icon} alt="" width={64} height={64} /></span>
              <span className="categories__name">{name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
