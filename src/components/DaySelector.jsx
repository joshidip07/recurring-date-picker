// // DaySelector.jsx placeholder
// import React from 'react';

// const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// const DaySelector = ({ formData, setFormData }) => {
//   const toggleDay = (day) => {
//     const updated = formData.daysOfWeek.includes(day)
//       ? formData.daysOfWeek.filter((d) => d !== day)
//       : [...formData.daysOfWeek, day];

//     setFormData({ ...formData, daysOfWeek: updated });
//   };

//   return (
//     <div>
//       <label className="font-medium">Select Days</label>
//       <div className="flex gap-2 mt-2">
//         {days.map((day) => (
//           <button
//             key={day}
//             onClick={() => toggleDay(day)}
//             className={`px-3 py-1 rounded-xl ${formData.daysOfWeek.includes(day) ? 'bg-green-600 text-white' : 'bg-gray-300'}`}
//           >
//             {day}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DaySelector;



import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const DaySelector = () => {
  const { recurrenceData, setRecurrenceData } = useRecurrence();
  const { daysOfWeek } = recurrenceData;

  const toggle = day => {
    const upd = daysOfWeek.includes(day)
      ? daysOfWeek.filter(d => d !== day)
      : [...daysOfWeek, day];
    setRecurrenceData({ ...recurrenceData, daysOfWeek: upd });
  };

  return (
    <div>
      <div className="font-medium">Select Days:</div>
      <div className="flex gap-2 mt-2">
        {days.map(day => (
          <button
            key={day}
            className={`px-3 py-1 rounded-xl ${
              daysOfWeek.includes(day) ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => toggle(day)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaySelector;
