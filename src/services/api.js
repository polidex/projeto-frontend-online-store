export async function getCategories() {
  const apiRequest = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await apiRequest.json();
  return result;
}

async function getProductsFromCategory(categoryId) {
  const apiRequest = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const result = await apiRequest.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!query) {
    const result = getProductsFromCategory(categoryId);
    return result;
  }
  if (categoryId === '') {
    const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    return result;
  }
  const apiRequest = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const result = await apiRequest.json();
  return result;
}

export async function getProductFromId(productId) {
  const apiRequest = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const result = await apiRequest.json();
  return result;
}
