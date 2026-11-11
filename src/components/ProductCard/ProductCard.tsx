import type { Product } from '../../types/product';
import { formatPrice, formatInstallments } from '../../utils/formatPrice';
import fallbackPhoto from '../../assets/iphone.png';
import './ProductCard.scss';

interface Props {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: Props) {
  return (
    <article className="product-card">
      <button type="button" className="product-card__media" onClick={() => onSelect(product)} aria-label={`Ver detalhes de ${product.productName}`}>
        <img
          src={product.photo}
          alt={product.productName}
          loading="lazy"
          width={275}
          height={238}
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackPhoto; }}
        />
      </button>
      <h3 className="product-card__name">{product.descriptionShort}</h3>
      <p className="product-card__old-price"><span className="visually-hidden">De </span>{formatPrice(product.price * 1.07)}</p>
      <p className="product-card__price">{formatPrice(product.price)}</p>
      <p className="product-card__installments">{formatInstallments(product.price)}</p>
      <p className="product-card__shipping">Frete grátis</p>
      <button type="button" className="product-card__buy" onClick={() => onSelect(product)}>Comprar</button>
    </article>
  );
}
