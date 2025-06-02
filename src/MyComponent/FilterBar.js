// FilterBar.js
import React from 'react';

function FilterBar({ onFilter }) {
  const grades = ['All', 'A', 'B', 'C', 'D', 'F'];
  return (
    <select onChange={e => onFilter(e.target.value)}>
      {grades.map(grade => <option key={grade}>{grade}</option>)}
    </select>
  );
}

export default FilterBar;