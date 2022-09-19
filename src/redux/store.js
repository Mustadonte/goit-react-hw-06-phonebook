import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import contactListSlice from './Contacts/ContactListSlice';
import filterSlice from './Filter/filterSlice';

const contactsRootConfig = {
  key: 'contacts',
  storage,
};

const rootReducer = combineReducers({
  items: contactListSlice,
  filter: filterSlice,
});
const persistRootReducer = persistReducer(contactsRootConfig, rootReducer);

export const store = configureStore({
  reducer: {
    contacts: persistRootReducer, 
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
