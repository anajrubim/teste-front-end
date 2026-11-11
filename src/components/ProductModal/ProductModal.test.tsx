import { render, screen, fireEvent } from '@testing-library/react';
import { ProductModal } from './ProductModal';

const product = { productName: 'iPhone X', descriptionShort: 'Desc', photo: 'x.png', price: 1000 };

describe('ProductModal', () => {
  it('exibe as informações do produto', () => {
    render(<ProductModal product={product} onClose={() => {}} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('iPhone X')).toBeInTheDocument();
  });

  it('fecha com ESC', () => {
    const onClose = vi.fn();
    render(<ProductModal product={product} onClose={onClose} />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });
});
