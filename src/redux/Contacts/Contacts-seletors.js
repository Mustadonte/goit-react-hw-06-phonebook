export const getItems = store => store.contacts.items;

export const getFilteredContacts = state => {
  if (!state.contacts.filter) {
    return state.contacts.items;
  }

  const normalizedFilterText = state.contacts.filter.toLowerCase();

  return state.contacts.items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilterText)
  );
};
