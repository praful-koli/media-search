export const getCollectionDataLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("collection")) || [];
  } catch {
    return [];
  }
};

export const addCollectionToLocalStorage = (item) => {
  const collection = getCollectionDataLocalStorage();
  const newCollection = [...collection, item];
  localStorage.setItem("collection", JSON.stringify(newCollection));
};

export const removeAllItemFromLocalStorage = () => {
  localStorage.removeItem("collection");
};

export const removeItemFromLocalStorage = (id) => {
  const collection = getCollectionDataLocalStorage("collection");
  const newCollection = collection.filter((item) => item.id !== id);
  localStorage.setItem("collection", JSON.stringify(newCollection));
};
