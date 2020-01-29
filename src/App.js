import React from 'react';
import ToDoList from './toDo/ToDoList'
import Context from './Context'
import AddTodo from './toDo/AddTodo'


function App() {

  const [todos, setTodos] = React.useState( [
    {id: 1, completed: false, title:'Выучить React' },
    {id: 2, completed: true, title:'Понять Redux' },
    {id: 3, completed: false, title:'Cоздавать понятный код' }
  ])

  function toggleToDo(id) {
    setTodos(
    todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  )
}
// удаляем item нажатием на кнопку
function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}
// добавляем todo в пустой инпут
function addTodo(title) {
  setTodos(
    todos.concat([
      {
        title,
        id:Date.now(), //?
        completed: false

      }
    ])
  )
}

  return (
    <Context.Provider value={{removeTodo: removeTodo}}> 
      <div className='wrapper'>
        <h1>todos</h1>

        <AddTodo onCreate={addTodo} />   

        {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleToDo} />
        ) : (
          <p> NO todos! </p>
        )}
      </div>
    </Context.Provider> 
    
  )
}
// тернарный оператор, при условии отсутствия todos
export default App;
