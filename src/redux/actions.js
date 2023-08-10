import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64d353a967b2662bf3dc0895.mockapi.io';

export const getContacts = createAsyncThunk(
  'contacts/GET_CONTACTS',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/ADD_CONTACT',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/DELETE_CONTACT',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  'contacts/TOGGLE_FAVORITE',
  async ({ favorite, id }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/contacts/${id}`, { favorite });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const addContact = createAction('contacts/ADD', (name, number) => {
//   return {
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//       favorite: false,
//     },
//   };
// });

// export const deleteContact = createAction('contacts/DELETE');

// export const toggleFavorite = createAction('contacts/FAVORITE');

// export const setStatusFilter = createAction('filters/SET');
