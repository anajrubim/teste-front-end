export function formatPrice(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace(/\u00a0/g, ' ');
}

export function formatInstallments(value: number, times = 2): string {
  return `ou ${times}x de ${formatPrice(value / times)} sem juros`;
}
