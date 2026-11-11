import type { Product, ProductsResponse } from '../types/product';
import localData from '../data/produtos.json';

export const PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

/**
 * Busca os produtos na API da Econverse. Se a requisição falhar (CORS, rede,
 * API fora do ar), usa uma cópia local do mesmo JSON para a vitrine nunca ficar vazia.
 */
export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  try {
    const response = await fetch(PRODUCTS_URL, { signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data: ProductsResponse = await response.json();
    if (!data.success || !Array.isArray(data.products)) throw new Error('Resposta inválida');
    return data.products;
  } catch (error) {
    if ((error as Error).name === 'AbortError') throw error;
    console.warn('Não foi possível carregar os produtos da API; usando dados locais.', error);
    return (localData as ProductsResponse).products;
  }
}
