export const getCollectionDataLocalStorage = () => {
  return JSON.parse(localStorage.getItem("collection")) || [];
};

export const addCollectionToLocalStorage = (item) => {
  const collection = getCollectionDataLocalStorage();

  if (collection.length < 0) {
    collection.push(item);
    localStorage.setItem("collection", JSON.stringify(collection));
  } else {
    const newCollection = [...collection, item];
    localStorage.setItem("collection", JSON.stringify(newCollection));
  }
};

export const removeAllItemFromLocalStorage = () => {
  localStorage.removeItem("collection");
};

export const removeItemFromLocalStorage = (id) => {
  const collection = getCollectionDataLocalStorage("collection");
  const newCollection = collection.filter((item) => item.id !== id);
  localStorage.setItem('collection', JSON.stringify(newCollection))
};
