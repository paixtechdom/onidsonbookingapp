// components/DatePicker.js
import { useState, useEffect, useRef, FC } from 'react';
import {
  format,
  addMonths,
  subMonths,
  addYears,
  subYears,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isToday,
  subDays,
  addDays
} from 'date-fns';

import { BsCalendar2, BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';



const DatePicker:FC<any> = ({ selectedDate, formInputs }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<any>(new Date());
  const [highlightedDate, setHighlightedDate] = useState(null);
  const inputRef = useRef(null);
  const calendarRef = useRef<any>(null);

  useEffect(() => {
    if (showCalendar) {
      calendarRef.current.focus();
    }
  }, [showCalendar]);

  const handleDateClick = (date : any) => {
    formInputs['date'] = format(date, 'dd-MM-yyyy');
    setShowCalendar(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handlePrevYear = () => {
    setCurrentMonth(subYears(currentMonth, 1));
  };

  const handleNextYear = () => {
    setCurrentMonth(addYears(currentMonth, 1));
  };

  const handleKeyDown = (e : any) => {
    if (!highlightedDate) {
      setHighlightedDate(currentMonth);
      return;
    }

    let newDate;
    switch (e.key) {
      case 'ArrowLeft':
        newDate = subMonths(highlightedDate, 1);
        break;
      case 'ArrowRight':
        newDate = addMonths(highlightedDate, 1);
        break;
      case 'ArrowUp':
        newDate = subYears(highlightedDate, 1);
        break;
      case 'ArrowDown':
        newDate = addYears(highlightedDate, 1);
        break;
      case 'Enter':
        handleDateClick(highlightedDate);
        return;
      default:
        return;
    }
    setHighlightedDate(newDate);
  };

  const renderDays = () => {
    const startDate = startOfMonth(currentMonth);
    const endDate = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start: startDate, end: endDate });
    const firstDayIndex = getDay(startDate);
  
    // Calculate the previous month days that might be shown at the top
    const previousMonthDays = [];
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      previousMonthDays.push(null);
    }
  
    // Calculate days for the next month that might be shown at the bottom
    const nextMonthDays = [];
    const remainingDays = 35 - (previousMonthDays.length + days.length);
    for (let i = 1; i <= remainingDays; i++) {
      nextMonthDays.push(null);
    }
  
    // Combine all days
    const daysInMonth = [...previousMonthDays, ...days, ...nextMonthDays].slice(0, 35);
  
    return daysInMonth.map((day, index) => (
      <div
        key={index}
        className={`w-8 h-8 flex items-center justify-center cursor-pointer rounded ${
          day && isSameMonth(day, currentMonth) ? 'hover:bg-gray-200' : 'text-gray-400'
        } ${day && isToday(day) ? 'bg-blue-500 text-white' : ''} ${
          day && selectedDate && format(day, 'MM/dd/yyyy') === selectedDate ? 'bg-blue-500 text-white' : ''
        }`}
        onClick={() => day && handleDateClick(day)}
      >
        {day ? format(day, 'd') : ''}
      </div>
    ));
  };
  

  return (
    <div className="relative w-full">
      <div className="flex flex-col w-full gap-[10px] relative">
        <label htmlFor={"Date of Birth"} className="text-sm">Date of Birth</label>
        <div
          className={`flex border rounded-tl-xl rounded-br-xl border-secondary w-full px-3 items-center relative cursor-pointer`}
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <input
            type="text"
            value={selectedDate ? selectedDate : ''}
            ref={inputRef}
            placeholder="DD/MM/YY"
            onChange={(e) => {formInputs['date'] = e.target.value
              console.log(e.target.value)
            }}
            className={`bg-transparent border-none py-[12px] w-full outline-white text-[12px] cursor-pointer`}
            readOnly
            style={{
              outlineWidth: 0 + 'px'
            }}
          />
          <div className="text-xl cursor-pointer"><BsCalendar2 /></div>
        </div>
      </div>
      {showCalendar && (
        <div
          className="absolute top-12 left-0 border border-primary bg-primary bg-opacity-5 backdrop-blur-3xl rounded-xl shadow-xl z-20 p-9"
          tabIndex={0}
          ref={calendarRef}
          onKeyDown={handleKeyDown}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <BsChevronDoubleLeft
                className="cursor-pointer w-5 h-5"
                onClick={handlePrevYear}
              />
              <BsChevronLeft
                className="cursor-pointer ml-2 w-4 h-4"
                onClick={handlePrevMonth}
              />
            </div>
            <span className="text-sm">{format(currentMonth, 'MMMM yyyy')}</span>
            <div className="flex items-center">
              <BsChevronRight
                className="cursor-pointer mr-2 w-4 h-4"
                onClick={handleNextMonth}
              />
              <BsChevronDoubleRight
                className="cursor-pointer w-5 h-5"
                onClick={handleNextYear}
              />
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-sm">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
            {renderDays()}
          </div>
          <div className="flex w-full mt-4">
            <button
              className="w-full px-4 py-2 mr-2 bg-white border border-secondary text-secondary rounded text-sm"
              onClick={() => setShowCalendar(false)}
            >
              Cancel
            </button>
            <button
              className="w-full px-4 py-2 bg-secondary text-white rounded text-sm"
              onClick={() => setShowCalendar(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
