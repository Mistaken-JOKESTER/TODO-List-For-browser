import './App.css';
import React, {useState, useEffect} from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([])
  const [id, setId] = useState(0)
  const [filter, setFilter] = useState('all')
  const [limitTasks, setLimitTaks] = useState([])

  useEffect(() => {
    if(localStorage.ge(todos))
      setTodos(JSON.parse(localStorage.getItem('todos')))
  },[])

  useEffect(()=> {
    console.log('adding')
    filterTasks(filter)
    saveTodoToLocalStorage()
  },[filter, todos])

  const addTodo = (value) =>{
    setTodos([
      ...todos,
      {
        value,
        status:false,
        _id:id
      }
    ])
    setId(prevId => prevId + 1)
  }

  const deleteTodo = (id) => {
    console.log(id)
    setTodos(todos.filter(todo => todo._id !== id))
  }

  const completeTodo = (id) => {
    setTodos(todos.map(todo => {
      if(todo._id === id){
        return {
          ...todo,
          status:true
        }
      } else{
        return todo
      }
    }))
  }

  const filterTasks = (value) => {
    switch(value){
      case 'complete':
        setLimitTaks(todos.filter(todo => todo.status === true))
        break;
      case 'incomplete':
        setLimitTaks(todos.filter(todo => todo.status === false))
        break;
      default:
        setLimitTaks(todos)
    }
  }

  const saveTodoToLocalStorage = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>

      <Form addTask={(value) => addTodo(value)} setFilter={setFilter} />
      <TodoList todos={limitTasks} deleteTask={(id) => deleteTodo(id)} completeTask={(id) => completeTodo(id)} />
    </div>
  );
}

export default App;
