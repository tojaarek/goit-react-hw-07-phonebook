import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;
export const selectStatusFilter = state => state.filter.status;
export const selectFiltersContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, filter) => {
    switch (filter) {
      case 'favorite':
        return contacts.filter(contact => contact.favorite);
      default:
        return contacts;
    }
  }
);
