import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contactsSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push({ ...action.payload, id: crypto.randomUUID() });
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
