// 

import React, { useMemo } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  parseISO,
  addDays,
  addWeeks,
  addMonths,
  addYears,
  isSameDay
} from 'date-fns';
import { useRecurrence } from '../context/RecurrenceContext';

const CalendarPreview = () => {
  const { recurrenceData } = useRecurrence();
  const { recurrenceType, interval, daysOfWeek, startDate, endDate } = recurrenceData;

  const dates = useMemo(() => {
    if (!startDate) return [];

    const start = parseISO(startDate);
    const end = endDate ? parseISO(endDate) : addMonths(start, 3);
    const out = [];
    let current = start;

    switch (recurrenceType) {
      case 'daily':
        while (current <= end) {
          out.push(current);
          current = addDays(current, interval);
        }
        break;
      case 'weekly':
        while (current <= end) {
          const day = current.toLocaleDateString('en-US', { weekday: 'short' });
          if (daysOfWeek.includes(day)) out.push(current);
          current = addDays(current, 1);
        }
        break;
      case 'monthly':
        while (current <= end) {
          out.push(current);
          current = addMonths(current, interval);
        }
        break;
      case 'yearly':
        while (current <= end) {
          out.push(current);
          current = addYears(current, interval);
        }
        break;
      default:
        break;
    }

    return out;
  }, [recurrenceType, interval, daysOfWeek, startDate, endDate]);

  return (
    <div className="mt-6">
      <h2 className="font-bold text-lg mb-2">Calendar Preview</h2>
      <Calendar
        tileClassName={({ date }) =>
          dates.some(d => isSameDay(d, date)) ? 'bg-blue-500 text-white rounded-full' : ''
        }
      />
    </div>
  );
};

export default CalendarPreview;
