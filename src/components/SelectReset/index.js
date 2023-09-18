import React from 'react';
import "./index.css"

const SelectReset = ({
  options,
  selectedTime,
  onChangeSelect,
  onClickReset,
}) => {
  return (
    <div  className="btn-container">
      <select onChange={onChangeSelect} value={selectedTime} className="select-opt">
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt + ' sec'}
          </option>
        ))}
      </select>
      <button onClick={onClickReset} className="button" type="button">Reset</button>
    </div>
  );
};

export default SelectReset;
