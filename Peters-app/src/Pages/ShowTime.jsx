import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';

export const ShowTime = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div style={{ width: "20%", marginLeft: "80%" }}>
      <Select
        color={"#02AB6C"}
        fontSize={"small"}
        placeholder='Show Timeline: Jan’22 - Dec’23'
        onChange={handleChange}
        value={selectedOption}
      >
        <option value='data'>Show Timeline: Jan’20 - Dec’21</option>
        <option value='data'>Show Timeline: Jan’21 - Dec’22</option>
        <option value='data'>Show Timeline: Jan’22 - Dec’23</option>
      </Select>
    </div>
  );
};
