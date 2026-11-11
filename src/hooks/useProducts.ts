import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productsService';
import type { Product } from '../types/product';

interface State {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export function useProducts(): State {
  const [state, setState] = useState<State>({ products: [], loading: true, error: null });

  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(controller.signal)
      .then((products) => setState({ products, loading: false, error: null }))
      .catch((err: Error) => {
        if (err.name === 'AbortError') return;
        setState({ products: [], loading: false, error: err.message });
      });
    return () => controller.abort();
  }, []);

  return state;
}
