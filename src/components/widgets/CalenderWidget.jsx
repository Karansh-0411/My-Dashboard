import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns";

const CalendarWidget = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Get the start and end dates for the calendar grid
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <button onClick={handlePrevMonth}>&lt;</button>
      <h2>{format(currentMonth, "MMMM yyyy")}</h2>
      <button onClick={handleNextMonth}>&gt;</button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEE";

    for (let i = 0; i < 7; i++) {
      const day = addDays(startOfWeek(new Date()), i);
      days.push(
        <div className="text-center font-bold" key={i}>
          {format(day, dateFormat)}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const rows = [];
    let days = [];
    let day = startDate;
    const dateFormat = "d";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        days.push(
          <div
            className={`text-center p-2 rounded-lg cursor-pointer ${
              !isSameMonth(day, monthStart)
                ? "text-gray-400"
                : isSameDay(day, selectedDate)
                ? "bg-blue-500 text-white"
                : ""
            }`}
            key={day}
            onClick={() => handleDateClick(cloneDay)}
          >
            {format(day, dateFormat)}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div className="grid grid-cols-7">{days}</div>);
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="calendar-widget p-4 bg-gray-100 rounded-lg shadow-md">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default CalendarWidget;
