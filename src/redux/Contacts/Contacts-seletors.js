export const getItems = store => store.items.values;

export const getFilteredContacts = state => {
  if (!state.filter.value) {
    return state.items.values;
  }
  const normalizedFilterText = state.filter.value.toLowerCase();

  return state.items.values.filter(item =>
    item.name.toLowerCase().includes(normalizedFilterText)
  );
};
