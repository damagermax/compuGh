export const addToStorage = (item, data) => {
  localStorage.setItem(item, JSON.stringify(data));
};

export const removeFromStorage = (data) => {
  localStorage.removeItem(data);
};

export const getFromStorage = (data) => {
  const item = localStorage.getItem(data);
  const result = item ? JSON.parse(item) : null;
  return result;
};
