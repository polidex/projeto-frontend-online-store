export async function getCategories() {
  const apiRequest = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await apiRequest.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
