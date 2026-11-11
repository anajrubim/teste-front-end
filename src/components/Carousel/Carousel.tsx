import { Children, useRef, type ReactNode } from 'react';
import './Carousel.scss';

interface Props {
  children: ReactNode;
  label: string;
  className?: string;
}

export function Carousel({ children, label, className = '' }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const t = trackRef.current;
    if (t) t.scrollBy({ left: dir * t.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <div className={`carousel ${className}`}>
      <button type="button" className="carousel__arrow carousel__arrow--prev" onClick={() => scroll(-1)} aria-label={`${label}: anterior`}>
        <i className="fi fi-rr-angle-small-left" aria-hidden="true" />
      </button>
      <ul className="carousel__track" ref={trackRef} aria-label={label}>
        {Children.map(children, (child) => <li className="carousel__item">{child}</li>)}
      </ul>
      <button type="button" className="carousel__arrow carousel__arrow--next" onClick={() => scroll(1)} aria-label={`${label}: próximo`}>
        <i className="fi fi-rr-angle-small-right" aria-hidden="true" />
      </button>
    </div>
  );
}
