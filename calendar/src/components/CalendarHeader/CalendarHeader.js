import React from 'react'; 
import './CalendarHeader.scss';


const CalendarHeader = ({value ,setValue}) => {

    const currMonthName = () => {
        return value.format('MMMM');
    }
    const currYearName = () => {
        return value.format('YYYY');
    }
    const prevMonth = () => {
        return value.clone().subtract(1, 'month');
    }
    const nextMonth = () => {
        return value.clone().add(1, 'month');
    }

 return (
    <div className="calendar__header">
    <div className="previous"
    onClick={() => setValue(prevMonth())}>
        {String.fromCharCode(60)}</div>
    
    <div className="current">
        {currMonthName()} {currYearName()}</div>
    
    <div className="next"
    onClick={() => setValue(nextMonth())}>
        {String.fromCharCode(62)}</div>
</div>
 )
}
export default CalendarHeader;