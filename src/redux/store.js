import { configureStore } from '@reduxjs/toolkit';
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

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const persistContactsReducer = persistReducer(
  contactsPersistConfig,
  contactListSlice
);

const filterPersistConfig = {
  key: 'filter',
  storage,
};

const persistFilterReducer = persistReducer(filterPersistConfig, filterSlice);

export const store = configureStore({
  reducer: {
    items: persistContactsReducer,
    filter: persistFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
