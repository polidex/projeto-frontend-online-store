export async function getCategories() {
  const apiRequest = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await apiRequest.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const apiRequest = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const result = await apiRequest.json();
  return result;
}

export async function getProductsFromCategory(categoryId) {
  const apiRequest = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const result = await apiRequest.json();
  return result;
}
