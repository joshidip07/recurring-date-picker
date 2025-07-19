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
