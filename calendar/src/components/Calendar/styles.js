const isSelected = (value, day) => {
    return value.isSame(day, 'day');
  } 
  export const beforeToday = (day) => {
      return day.isBefore(new Date(), 'day');

  }

  const isToday = (day) => {
      return day.isSame(new Date(), 'day');
  }
  
  const dayStyles = (day, value) => {
      if(beforeToday(day)) return 'before';
      if(isSelected(value, day)) return 'selected';
      if(isToday(day)) return 'today';
      return ' ';

  }
  export default dayStyles;