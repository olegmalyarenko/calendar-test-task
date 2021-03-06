import React, { useState, useEffect } from 'react'; 
import './Calendar.scss';
import moment from 'moment';
import buildCalendar from './Build.js';
import dayStyles from './styles.js';
import CalendarHeader from '../CalendarHeader';
import ModalWindow from '../ModalWindow';
import BackDrop from '../BackDrop';

const Calendar = ({ modal , open, modalValue, close }) => {
    const [ calendar, setCalendar ] = useState([]);
    const [ value, setValue ] = useState(moment());
    
    useEffect(()=> {
        setCalendar(buildCalendar(value));

    }, [value] );

   
    return (
        <div className="calendar">
            { modal && <ModalWindow value={modalValue} close={close} /> }
             { modal && <BackDrop  modal={modal} close={close} /> }
            <div className="calendar__content">
            <CalendarHeader value={value} setValue={setValue}/>
            <div className="calendar__body">
              {calendar.map( week => (
                 <div key={Date.now() + Math.random()} className="week-row">{
                   week.map(day => (
                     <div key={Date.now() + Math.random()} className="day">
                        <div key={Date.now() + Math.random()} className={dayStyles(day, value)} onClick={()=> open(day)}>
                         { day.format('DD').toString()}
                        </div> 
                     </div> 
                    ))
                  } </div>))}
            </div>

            <div className="calendar__footer">
                {
                    ['s','m','t','w','t','f','s'].map( d => (
                    <div key={Date.now() + Math.random()} className="week">{d}</div> 
                    )) 
                }
            </div>
            </div>

        </div>

    )
}
export default Calendar;