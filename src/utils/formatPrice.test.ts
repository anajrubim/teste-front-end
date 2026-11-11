import { formatPrice, formatInstallments } from './formatPrice';

describe('formatPrice', () => {
  it('formata em reais', () => {
    expect(formatPrice(1500)).toMatch(/R\$\s?1\.500,00/);
  });
  it('calcula parcelas', () => {
    expect(formatInstallments(1000, 10)).toMatch(/10x de R\$\s?100,00/);
  });
});
