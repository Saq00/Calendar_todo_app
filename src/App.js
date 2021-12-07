import React ,{useState}  from 'react';
import FormWeek from './components/FormWeek';
import FormHeader from './components/FormHeader'
import './App.css';


const App = () =>  {

  const [date , setDate] =useState({
    today : new Date() ,
    month : ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'],
    week: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"] 
})



  return (
    <div className='container'>
        <FormHeader date={date}/>
            <div class="parent">
                <div class="div1"> <FormWeek date={date} /></div>
                <div class="div2"> <FormWeek date={date} /></div>
                <div class="div3"> <FormWeek date={date} /></div>
                <div class="div4"> <FormWeek date={date} /></div>
                <div class="div5"> <FormWeek date={date} /></div>
                <div class="div6"> <FormWeek date={date} /></div>
                <div class="div7"> <FormWeek date={date} /></div>
             </div>
    </div>
  );
}

export default App;


