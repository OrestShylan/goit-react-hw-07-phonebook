import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'components/redux/phonebookSlice';
import { selectFilter } from 'components/redux/selectors';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = event => {
    dispatch(updateFilter(event.target.value));
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
