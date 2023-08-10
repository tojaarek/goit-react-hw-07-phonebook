import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';

const Filter = ({ filter, onFilterChange }) => {
  const dispatch = useDispatch();
  const handleChange = event => {
    onFilterChange(event.target.value);
  };
  const handleChangeFilter = status => {
    dispatch(setStatusFilter(status));
  };
  return (
    <div>
      <div className={css.wrapper}>
        <button
          className={css.buttonMargin}
          onClick={() => handleChangeFilter('all')}
        >
          All
        </button>
        <button
          className={css.button}
          onClick={() => handleChangeFilter('favorite')}
        >
          Favorite
        </button>
      </div>
      <label className={css.label} htmlFor="searchInput">
        Find contacts by name
        <input
          id="searchInput"
          className={css.input}
          type="text"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
