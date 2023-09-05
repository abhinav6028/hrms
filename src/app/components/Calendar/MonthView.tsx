import React from 'react';
 
import './monthView.css'

export type EmployeeLeaveDetails = {
  date: Date
  type: string
}

interface CalendarProps {
  year: number;
  month: number;
  type: string;
  employeeLeaveDetails: EmployeeLeaveDetails[];
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ year, month, className, type, employeeLeaveDetails }) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const totalDays = lastDay.getDate();
  const firstDayVal = -firstDay.getDay() + 1;
  // const lastDayVal = firstDayVal + 41;
  const startDate = new Date(year, month, firstDayVal);
  // const endDate = new Date(year, month, lastDayVal);
  const totalWeeks = 6;
  const weeks: JSX.Element[] = [];

  let currentDate = startDate;

  for (let weekIndex = 0; weekIndex < totalWeeks; weekIndex++) {
    const week: JSX.Element[] = [];

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      if (
        (weekIndex * 7 + dayIndex + firstDayVal < 1) ||
        (weekIndex * 7 + dayIndex + firstDayVal > totalDays)
      ) {
        week.push(
          <div className="col calendar-day border d-flex align-items-center justify-content-center" key={`${weekIndex}-${dayIndex}`}></div>
        );
      } else {
        const object = employeeLeaveDetails.find(obj => obj.date.getTime()===currentDate.getTime())
        if(object!==undefined ?(type==="All" || object.type===type) :false){
          week.push(
            <div 
              className={`col calendar-day ${object!.type} border d-flex align-items-center justify-content-center`}
              key={currentDate.toString()}
            >
              {currentDate.getDate()}
            </div>
          );
        } else{
          week.push(
            <div className="col calendar-day border d-flex align-items-center justify-content-center" key={currentDate.toString()}>
              {currentDate.getDate()}
            </div>
          );
        }
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    weeks.push(
      <div className="row calendar-week" key={weekIndex}>
        {week}
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="calendar-header d-flex align-items-center justify-content-center">
        <h2>{new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
      </div>
      <div className="calendar-body">
        <div className="row calendar-weekdays d-flex flex-row-fluid">
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary">S</div>
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary">M</div>
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary">T</div>
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary">W</div>
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary">T</div>
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary text-info">F</div>
          <div className="col h4 day-header border d-flex align-items-center justify-content-center bg-secondary text-info">S</div>
        </div>
        {weeks}
      </div>
    </div>
  );
};

export default Calendar;


