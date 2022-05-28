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

export function removeItem(item) {
  const listToSave = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  const index = listToSave.findIndex((i) => i.id === item.id);
  const magicNumber = -1;
  if (index !== magicNumber) {
    listToSave.splice(index, 1);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listToSave));
  }
}

export function addSameItem(item) {
  const listToSave = getItems();
  listToSave.push(item);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listToSave));
}
