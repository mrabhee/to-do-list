import { useEffect, useState } from 'react'
import './App.css'
import { Todoprovider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
function App() {

  //Creating todo list variable
  const [todos, setTodos] = useState([])

  //creating add method for adding todo in list
  const addTodo = (todo) => {
    setTodos([...todos, {
      id: Math.random(), ...todo
    }])
  }

  //Creating delete method for delete todo from list
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  //using useeffect for get from local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos)
    }
  }, [])

  //using useeffect for set todo in local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <div className='App'>
      <Todoprovider value={{ todos, addTodo, deleteTodo }}>
        <TodoForm />
        {
          (todos).map((todo)=>{
            return (
              <div key={todo.id}>
                <TodoItem todo={todo}/>
              </div>
            )
          })
        }
      </Todoprovider>
    </div>
  )
}
export default App