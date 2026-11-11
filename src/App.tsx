import { useCallback, useState } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Categories } from './components/Categories/Categories';
import { Showcase } from './components/Showcase/Showcase';
import { PartnerBanners } from './components/PartnerBanners/PartnerBanners';
import { Brands } from './components/Brands/Brands';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Footer } from './components/Footer/Footer';
import { ProductModal } from './components/ProductModal/ProductModal';
import { useProducts } from './hooks/useProducts';
import type { Product } from './types/product';

const tabs = ['celular', 'acessórios', 'tablets', 'NOTEBOOKS', 'TVs'];

export default function App() {
  const { products, loading, error } = useProducts();
  const [selected, setSelected] = useState<Product | null>(null);
  const close = useCallback(() => setSelected(null), []);
  const shared = { products, loading, error, onSelect: setSelected };

  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Econverse - Tecnologia</h1>
        <Hero />
        <Categories />
        <Showcase id="vitrine" tabs={tabs} {...shared} />
        <PartnerBanners />
        <Showcase id="vitrine-2" {...shared} />
        <PartnerBanners />
        <Brands />
        <Showcase id="vitrine-3" {...shared} />
      </main>
      <Newsletter />
      <Footer />
      {selected && <ProductModal product={selected} onClose={close} />}
    </>
  );
}
