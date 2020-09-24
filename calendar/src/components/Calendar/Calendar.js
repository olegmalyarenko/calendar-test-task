import React, { useState, useEffect } from 'react'; 
import './Calendar.scss';
import moment from 'moment';
import buildCalendar from './Build.js';
import dayStyles, { beforeToday } from './styles.js';

const Calendar = () => {
    const [ calendar, setCalendar ] = useState([]);
    const [ value, setValue ] = useState(moment());
    
    useEffect(()=> {
        setCalendar(buildCalendar(value));

    }, [value] );

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
        <div className="calendar">
            <div className="calendar__header">
                <div className="previous"
                onClick={() => setValue(prevMonth())}>
                    {String.fromCharCode(171)}</div>
                
                <div className="current">
                    {currMonthName()}{currYearName()}</div>
                
                <div className="next"
                onClick={() => setValue(nextMonth())}>
                    {String.fromCharCode(187)}</div>
            </div>
            <div className="calendar__content">
              {calendar.map( week => (
                 <div>{
                   week.map(day => (
                     <div className="day" onClick={()=> setValue(day)}>
                        <div className={dayStyles(day, value)}>
                         { day.format('D').toString()}
                        </div> 
                     </div> 
                    ))
                  } </div>))}
            </div>

            <div className="calendar__footer">
                {
                    ['s','m','t','w','t','f','s'].map( d => (
                    <div className="week">{d}</div> 
                    )) 
                }
            </div>

        </div>

    )
}
export default Calendar;