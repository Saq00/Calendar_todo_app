import React , { useState , useEffect} from "react";
import Header from './Header.js';
import Form from './Form.js' ;
import TodoList from "./TodoList.js";


const FormWeek = (p) => {

    const initialState = JSON.parse(localStorage.getItem('todos')) || [] ;
    const [input , setInput] = useState('');
    const [todos , setTodos]  = useState(initialState);
    const [editTodo , setEditTodo ] = useState(null)

        useEffect(() => {
            localStorage.setItem('todos' , JSON.stringify(todos))
        }, [todos])
    
      return(
        <div >
        <div className='app'>
            <div>
            
            </div>
            <div>
                <Header date={p.date}/>
                <Form 
                input = {input}
                setInput = {setInput}
                todos = {todos}
                setTodos = {setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo} 
                
                />
            </div>
            <div>
                <TodoList todos={todos} setTodos={setTodos}  setEditTodo={setEditTodo} />
            </div>
        </div>
        </div>
      )


}


export default FormWeek;