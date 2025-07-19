

import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const DateRangePicker = () => {
  const { recurrenceData, setRecurrenceData } = useRecurrence();

  return (
    <div className="flex gap-4">
      <div>
        <label className="block font-medium">Start Date:</label>
        <input
          type="date"
          className="border p-2 rounded"
          value={recurrenceData.startDate}
          onChange={e => setRecurrenceData({ ...recurrenceData, startDate: e.target.value })}
        />
      </div>
      <div>
        <label className="block font-medium">End Date(optional):</label>
        <input
          type="date"
          className="border p-2 rounded"
          value={recurrenceData.endDate}
          onChange={e => setRecurrenceData({ ...recurrenceData, endDate: e.target.value })}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
