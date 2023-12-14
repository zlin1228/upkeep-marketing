export const getLocalStorage = (key, id) => {
  const now = new Date();
  const item = JSON.parse(localStorage.getItem(key));
  if (!item) return null;

  if (now.getTime() > item.expiry || item.id !== id) {
    localStorage.removeItem(key);
    return false;
  }
  return item.value;
};

export const setLocalStorage = id => {
  const now = new Date();
  const item = { value: 'true', id, expiry: now.getTime() + 1209600000 };
  localStorage.setItem('exit_intent_seen', JSON.stringify(item));
};
