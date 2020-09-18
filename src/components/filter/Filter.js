import React from 'react';
import withTransition from '../hoc/withTransition';
import s from './Filter.module.css';

const Filter = ({ onSearch }) => {
  return (
    <div className={s.field}>
      <input
        type="text"
        onChange={onSearch}
        className={s.input}
        name="filter"
        id="filter"
        placeholder=" "
      />
      <label htmlFor="filter" className={s.label}>
        Name Search
      </label>
    </div>
  );
};

export default withTransition(s)(true)(Filter);
