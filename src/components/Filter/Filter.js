import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/Filter/Filter-selectors';
import { setFilter } from 'redux/Filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  return (
    <label className={css.label}>
      Поиск контактов
      <input
        type="text"
        value={value}
        className={css.input}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};
