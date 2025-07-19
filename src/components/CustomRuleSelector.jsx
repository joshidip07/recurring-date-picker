// 

import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const CustomRuleSelector = () => {
  const { recurrenceData, setRecurrenceData } = useRecurrence();

  return (
    <div>
      <label className="block font-medium">Custom Rule:</label>
      <select
        className="border p-2 rounded mt-2 w-full"
        value={recurrenceData.customRule}
        onChange={e => setRecurrenceData({ ...recurrenceData, customRule: e.target.value })}
      >
        <option value="">None</option>
        <option value="second-tuesday">Second Tuesday</option>
        <option value="last-friday">Last Friday</option>
      </select>
    </div>
  );
};

export default CustomRuleSelector;
