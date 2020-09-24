 const isSelected = (value, day) => {
     console.log('selected', value.isSame(day, 'day'));
    return value.isSame(day, 'day');
  } 

 const currentMonth = (value, day) => {
     if (isToday(day)) {
         return;
     }
      //return day.format('MMMM') === value.format('MMMM');
      return day.isSame(value, 'month');

  }

  const isToday = (day) => {
      console.log('today' , day.isSame(new Date(), 'day'));
      return day.isSame(new Date(), 'day');
  }
  
  const dayStyles = (day, value) => {
      if(isToday(day)) return 'today';
      if(currentMonth(value, day)) return 'current-month';
      if(isSelected(value, day)) return 'today';
      
      return ' ';

  }
  export default dayStyles;