import React, { useState, useEffect } from 'react'; 
import './Calendar.scss';
import moment from 'moment';
import buildCalendar from './Build.js';
import dayStyles from './styles.js';

const Calendar = () => {
    const [ calendar, setCalendar ] = useState([]);
    const [ value, setValue ] = useState(moment());
    
    useEffect(()=> {
        setCalendar(buildCalendar(value));

    }, [value] );

   
    return (
        <div className="calendar">
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

        </div>

    )
}
export default Calendar;