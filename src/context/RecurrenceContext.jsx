// // RecurrenceContext.jsx placeholder
// // import React from 'react';
// import React, { createContext, useContext, useState } from 'react';

// // Create context
// const RecurrenceContext = createContext();

// // Custom hook to use the context
// export const useRecurrence = () => useContext(RecurrenceContext);

// // Provider component
// export const RecurrenceProvider = ({ children }) => {
//   const [recurrenceData, setRecurrenceData] = useState({
//     recurrenceType: 'daily',       // daily, weekly, etc.
//     interval: 1,                   // every 1 day/week/month...
//     daysOfWeek: [],                // ['Mon', 'Wed']
//     customRule: '',                // e.g., 'second-tuesday'
//     startDate: '',                 // e.g., '2025-07-20'
//     endDate: '',                   // optional
//   });

//   return (
//     <RecurrenceContext.Provider value={{ recurrenceData, setRecurrenceData }}>
//       {children}
//     </RecurrenceContext.Provider>
//   );
// };



import React, { createContext, useContext, useState } from 'react';

const RecurrenceContext = createContext();

export const useRecurrence = () => useContext(RecurrenceContext);

export const RecurrenceProvider = ({ children }) => {
  const [recurrenceData, setRecurrenceData] = useState({
    recurrenceType: 'daily',
    interval: 1,
    daysOfWeek: [],
    customRule: '',
    startDate: '',
    endDate: ''
  });

  return (
    <RecurrenceContext.Provider value={{ recurrenceData, setRecurrenceData }}>
      {children}
    </RecurrenceContext.Provider>
  );
};
