import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice";
import filterSlice from "./filterSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root-contacts",
  storage,
  version: 1,
  whitelist: "contacts-items",
};
const persistedReduser = persistReducer(persistConfig, contactsSlice);

export const store = configureStore({
  reducer: {
    contacts: persistedReduser,
    filter: filterSlice,
  },
});
export const persistor = persistStore(store);
