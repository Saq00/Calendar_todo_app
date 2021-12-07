import {useState} from 'react' 


const dayShortsArr = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const monthNamesArr = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];


const Calendar = (dayShort =dayShortsArr  , monthNames = monthNamesArr ) => {

    const today = new Date() ;
    const daysInWeek = [1,2,3,4,5,6,0]
    const todayFormated = `${today.getDate()}-${today.getMonth() + 1}-${today.getDay()}`
    const [selectedDate , setselectedDay] = useState(today)
    const selectedMonthLastDate = new Date(selectedDate.getFullYear() , selectedDate.getMonth() + 1 , 0)
    const prevMonthLAstDate = new Date(selectedDate.getFullYear() , selectedDate.getMonth() , 0)
    const daysInMonth = selectedMonthLastDate.getDate()
    const firstDayInMonth = new Date(selectedDate.getFullYear() , selectedDate.getMonth() , 1).getDay() ;
    const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1 ;
    

} 





export default Calendar;