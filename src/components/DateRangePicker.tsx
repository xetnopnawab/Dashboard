// components/DateRangeCalendar.tsx

import React, { useState } from 'react';
import { format, addDays, isAfter, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';

const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(addDays(new Date(), 7));

  const generateCalendarDates = (start: Date, end: Date): Date[][] => {
    const dates = eachDayOfInterval({ start, end });
    const calendarDates: Date[][] = [];

    let week: Date[] = [];
    dates.forEach((date) => {
      if (week.length === 7) {
        calendarDates.push(week);
        week = [];
      }
      week.push(date);
    });

    // Add the last week
    calendarDates.push(week);

    return calendarDates;
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    setStartDate(selectedDate);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    setEndDate(selectedDate);
  };

  const calendarDates = generateCalendarDates(startOfWeek(startOfMonth(startDate!)), endOfWeek(endOfMonth(endDate!)));

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Date Range Calendar</h2>
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            value={format(startDate!, 'yyyy-MM-dd')}
            onChange={handleStartDateChange}
            className="mt-1 p-2 border rounded focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            value={format(endDate!, 'yyyy-MM-dd')}
            onChange={handleEndDateChange}
            className="mt-1 p-2 border rounded focus:outline-none"
          />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-2">
        {calendarDates.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((date) => (
              <div
                key={date.getTime()}
                className={`p-2 border ${
                  isSameDay(date, startDate!) || isSameDay(date, endDate!)
                    ? 'bg-blue-500 text-white'
                    : isAfter(date, endDate!) || isAfter(date, startDate!)
                    ? 'text-gray-500'
                    : 'text-black'
                } rounded text-center`}
              >
                {format(date, 'd')}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DateRangePicker;
