// 


import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';
import RecurrencePicker from './RecurrencePicker';
import DaySelector from './DaySelector';
import CustomRuleSelector from './CustomRuleSelector';
import DateRangePicker from './DateRangePicker';
import CalendarPreview from './CalendarPreview';

const RecurrenceForm = () => {
  const { recurrenceData, setRecurrenceData } = useRecurrence();

  const update = (key, value) =>
    setRecurrenceData({ ...recurrenceData, [key]: value });

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-6">
      <RecurrencePicker />
      {recurrenceData.recurrenceType === 'weekly' && <DaySelector />}
      {recurrenceData.recurrenceType === 'monthly' && <CustomRuleSelector />}
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
};

export default RecurrenceForm;
