import { createSlice } from '@reduxjs/toolkit';
import { statusFilter } from './const';

const filtersInitial = {
  status: statusFilter.all,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitial,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
