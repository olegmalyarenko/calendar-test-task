
 const currentMonth = (value, day) => {
     if (isToday(day)) {
         return;
     }
      //return day.format('MMMM') === value.format('MMMM');
      return day.isSame(value, 'month');

  }

  const isToday = (day) => {
      
      return day.isSame(new Date(), 'day');
  }
  
  const dayStyles = (day, value) => {
      if(isToday(day)) return 'today';
      if(currentMonth(value, day)) return 'current-month';
      
      return ' ';

  }
  export default dayStyles;