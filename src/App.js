import React ,{useState}  from 'react';
import FormWeek from './components/FormWeek';
import FormHeader from './components/FormHeader'
import './App.css';


const App = () =>  {

  const [date , setDate] =useState({
    today : new Date() ,
    month : ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'],
    week: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"] ,
    ddd: [0,1,2,3,4,5,6] ,
})



  return (
    <div className="container">
      <FormHeader date={date} />
      <div class="content">
        {date.ddd.map((item ) => {
          return (
            <div className={`div${item+1}`}>
              <FormWeek date={date} />
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default App;


