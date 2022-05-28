const LOCAL_STORAGE_KEY = 'listOfItems';

export function getItems() {
  const response = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (response) {
    return response;
  }
  return [];
}

export function saveItems(item) {
  const listOfItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (listOfItems) {
    const listToSave = [...listOfItems, item];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listToSave));
  } else {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([item]));
  }
}
