//Formatar numeros no formato 2 000 8000
export function formatNumber(number) {
  const numberFormat = new Intl.NumberFormat("pt-PT");
  return numberFormat.format(number);
}

// Ignorar acentuacao da palavra
export function ignoreAccent(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
