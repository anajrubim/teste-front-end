import { useState } from 'react';
import type { Product } from '../../types/product';
import { Carousel } from '../Carousel/Carousel';
import { ProductCard } from '../ProductCard/ProductCard';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import './Showcase.scss';

interface Props {
  id: string;
  products: Product[];
  loading: boolean;
  error: string | null;
  tabs?: string[];
  onSelect: (product: Product) => void;
}

export function Showcase({ id, products, loading, error, tabs, onSelect }: Props) {
  const [activeTab, setActiveTab] = useState(tabs?.[0]);

  return (
    <section id={id} className="showcase container" aria-labelledby={`${id}-title`}>
      <SectionHeading id={`${id}-title`} title="Produtos relacionados" seeAll={!tabs} />

      {tabs && (
        <div className="showcase__tabs" role="tablist" aria-label="Categorias da vitrine">
          {tabs.map((tab) => (
            <button key={tab} type="button" role="tab" aria-selected={tab === activeTab} className={tab === activeTab ? 'is-active' : ''} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
          <a href="#">Ver todos</a>
        </div>
      )}

      {loading && <p className="showcase__status" role="status">Carregando produtos...</p>}
      {error && <p className="showcase__status showcase__status--error" role="alert">{error}</p>}
      {!loading && !error && (
        <Carousel label="Produtos" className="showcase__carousel">
          {products.map((p) => <ProductCard key={p.productName} product={p} onSelect={onSelect} />)}
        </Carousel>
      )}
    </section>
  );
}
