import React from 'react';
import './select.css';
import { SelectOption } from './select.types';

type Props = {
  value: string;
  handleOnChange: React.ChangeEventHandler<HTMLSelectElement>;
  disabled?: boolean;
  fullWidth?: boolean;
  options?: SelectOption[];
};

function Select({
  value,
  handleOnChange,
  disabled,
  fullWidth,
  options,
}: Props) {
  return (
    <select
      onChange={handleOnChange}
      value={value}
      disabled={disabled}
      title={value}
      className={fullWidth ? 'fullWidth' : ''}
    >
      {options?.map((opt) => (
        <option key={opt.value} value={opt.value} label={opt.label}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export { Select };
