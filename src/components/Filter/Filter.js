import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../redux/contactSlice';
import { selectFilter } from 'components/redux/selectors';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = ({ target: { value } }) => {
    dispatch(updateFilter(value));
  };

  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};
