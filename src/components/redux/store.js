import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';
// import { phoneBookReducer } from './phonebookSlice';
import { contactApi } from './contactSlice';

export const store = configureStore({
  reducer: {
    // phoneBook: phoneBookReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

export const persistor = persistStore(store);
