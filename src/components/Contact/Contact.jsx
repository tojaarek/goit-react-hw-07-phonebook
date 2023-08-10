import { useDispatch } from 'react-redux';
import { deleteContact, toggleFavorite } from 'redux/actions';
import results from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  const handleToggle = () =>
    dispatch(toggleFavorite({ id: contact.id, favorite: !contact.favorite }));

  return (
    <li className={results.item}>
      <input
        className={results.checkbox}
        type="checkbox"
        checked={contact.favorite}
        onChange={handleToggle}
      />
      <div className={results.wrapper}>
        {contact.name}: {contact.number}
        <button className={results.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Contact;
