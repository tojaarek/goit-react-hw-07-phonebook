import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
  toggleFavorite,
} from './actions';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getContacts.pending]: handlePending,
    [getContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      const updatedItems = state.items.filter(
        contact => contact.id !== action.payload.id
      );

      state.items = updatedItems;
    },
    [deleteContact.rejected]: handleRejected,
    [toggleFavorite.pending]: handlePending,
    [toggleFavorite.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.map(element => {
        if (element.id === action.payload.id) {
          return action.payload;
        }
        return element;
      });
    },
    [toggleFavorite.rejected]: handleRejected,
  },
});

export const contactsReducer = contactSlice.reducer;
