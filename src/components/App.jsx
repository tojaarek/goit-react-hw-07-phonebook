import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';
import app from './App.module.css';
import Filter from './Filter/Filter';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/actions';
import Loader from './Loader/Loader';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={app.position}>
      <div className={app.app}>
        <h1 className={app.headline}>Phonebook</h1>
        <AddContactForm />
        <h2 className={app.headline}>Contacts</h2>
        <Filter filter={filter} onFilterChange={setFilter} />
        {isLoading && !error && <Loader />}
        {error && <p>Error</p>}
        <ContactList filter={filter} />
      </div>
    </div>
  );
};
