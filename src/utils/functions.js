export function formatNumber(number) {
  const numberFormat = new Intl.NumberFormat("pt-PT");
  return numberFormat.format(number);
}
