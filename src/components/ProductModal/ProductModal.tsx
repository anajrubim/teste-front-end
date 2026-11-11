import { useEffect, useRef, useState } from 'react';
import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import fallbackPhoto from '../../assets/iphone.png';
import './ProductModal.scss';

interface Props {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: Props) {
  const [quantity, setQuantity] = useState(1);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      previous?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="modal__close" onClick={onClose} aria-label="Fechar"><i className="fi fi-rr-cross-small" aria-hidden="true" /></button>
        <img className="modal__image" src={product.photo} alt={product.productName} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackPhoto; }} />
        <div className="modal__info">
          <h2 id="modal-title" className="modal__title">{product.productName}</h2>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__description">{product.descriptionShort}</p>
          <a className="modal__link" href="#detalhes">Veja mais detalhes do produto &gt;</a>
          <div className="modal__actions">
            <div className="modal__quantity" role="group" aria-label="Quantidade">
              <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Diminuir quantidade"><i className="fi fi-rr-minus" aria-hidden="true" /></button>
              <output aria-live="polite">{String(quantity).padStart(2, '0')}</output>
              <button type="button" onClick={() => setQuantity((q) => q + 1)} aria-label="Aumentar quantidade"><i className="fi fi-rr-plus" aria-hidden="true" /></button>
            </div>
            <button type="button" className="modal__buy">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
