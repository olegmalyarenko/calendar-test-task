import React, { useState, useEffect } from 'react'; 
import './Calendar.scss';
import moment from 'moment';
import buildCalendar from './Build.js';
import dayStyles from './styles.js';
import CalendarHeader from '../CalendarHeader';

const Calendar = () => {
    const [ calendar, setCalendar ] = useState([]);
    const [ value, setValue ] = useState(moment());
    
    useEffect(()=> {
        setCalendar(buildCalendar(value));

    }, [value] );

    

   
    return (
        <div className="calendar">
            <div className="calendar__content">
            <CalendarHeader value={value} setValue={setValue}/>
            <div className="calendar__body">
              {calendar.map( week => (
                 <div className="week-row">{
                   week.map(day => (
                     <div className="day" onClick={()=> setValue(day)}>
                        <div key={day.id} className={dayStyles(day, value)}>
                         { day.format('DD').toString()}
                        </div> 
                     </div> 
                    ))
                  } </div>))}
            </div>

            <div className="calendar__footer">
                {
                    ['s','m','t','w','t','f','s'].map( d => (
                    <div key={d.id} className="week">{d}</div> 
                    )) 
                }
            </div>
            </div>

        </div>

    )
}
export default Calendar;