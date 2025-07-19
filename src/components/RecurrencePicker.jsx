// 

import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const RecurrencePicker = () => {
  const { recurrenceData, setRecurrenceData } = useRecurrence();
  const options = ['daily', 'weekly', 'monthly', 'yearly'];

  return (
    <div className="flex gap-4">
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => setRecurrenceData({ ...recurrenceData, recurrenceType: opt })}
          className={`px-4 py-2 rounded-xl ${
            recurrenceData.recurrenceType === opt
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200'
          }`}
        >
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default RecurrencePicker;
