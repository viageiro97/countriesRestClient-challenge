//Formatar numeros no formato 2 000 8000
export function formatNumber(number) {
  const numberFormat = new Intl.NumberFormat("pt-PT");
  return numberFormat.format(number);
}
