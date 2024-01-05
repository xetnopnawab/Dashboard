// components/DateRangePicker.tsx

import React, { useState } from 'react';
import { format, addDays, isAfter } from 'date-fns';

const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(addDays(new Date(), 7));

  const generateDates = (start: Date, end: Date): Date[] => {
    const dates = [];
    let currentDate = start;

    while (isAfter(currentDate, end) === false) {
      dates.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }

    return dates;
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    setStartDate(selectedDate);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    setEndDate(selectedDate);
  };

  const renderedDates = generateDates(startDate!, endDate!).map((date) => (
    <div key={date.getTime()} className="p-2">
      {format(date, 'MM/dd/yyyy')}
    </div>
  ));

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Date Range Picker</h2>
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
      <div className="mt-4 flex flex-wrap">{renderedDates}</div>
    </div>
  );
};

export default DateRangePicker;
