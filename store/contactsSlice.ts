import { Favourite } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "expo-contacts";

type ContactsState = {
  allContacts: Contact[];
  favourites: Favourite[];
};

const initialState: ContactsState = {
  allContacts: [],
  favourites: [],
};

const contactsSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setAllContacts: (state, action: PayloadAction<Contact[]>) => {
      state.allContacts = action.payload;
    },
    addToFavourites: (state, action: PayloadAction<Favourite>) => {
      const alreadyExists = state.favourites.find(f => f.id === action.payload.id);
      if (!alreadyExists) {
        state.favourites.push(action.payload);
      }
    },
    removeFromFavourites: (state, action: PayloadAction<string>) => {
      state.favourites = state.favourites.filter(f => f.id !== action.payload);
    },
  },
});

export const {
  setAllContacts,
  addToFavourites,
  removeFromFavourites,
} = contactsSlice.actions;

export default contactsSlice.reducer;
