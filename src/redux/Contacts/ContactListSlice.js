import { createSlice } from '@reduxjs/toolkit';

export const contactListSlice = createSlice({
  name: 'items',
  initialState: {
    values: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },

  reducers: {
    addContact(state, { payload }) {
      state.values.push(payload);
    },
    removeContact(state, { payload }) {
      state.values = state.values.filter(value => value.id !== payload);
    },
  },
});

export const { addContact, removeContact } = contactListSlice.actions;

export default contactListSlice.reducer;
