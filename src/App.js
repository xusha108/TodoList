import React, {Component} from 'react';
import ToDoList from './toDo/ToDoList'
import AddTodo from './toDo/AddTodo'
import {connect} from 'react-redux';
import { listItemClick, deleteListItem, inputSubmit, inputChange } from './actions/actions'


class App extends Component {

  // const [todos, setTodos] = React.useState( [
  //   {id: 1, completed: false, title:'Выучить React' },
  //   {id: 2, completed: true, title:'Понять Redux' },
  //   {id: 3, completed: false, title:'Cоздавать понятный код' }
  // ])

  // function toggleToDo(id) {
  //   setTodos(
  //   todos.map( todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed
  //     }
  //     return todo
  //   })
  // )
//}

// удаляем item нажатием на кнопку
// function removeTodo(id) {
//   setTodos(todos.filter(todo => todo.id !== id))
// }
// добавляем todo в пустой инпут
// function addTodo(title) {
//   setTodos(
//    todos.concat([
//       {
//         title,
//         id:Date.now(), 
//         completed: false

//       }
//     ])
//   )
// }

render() {
  const {listItemClick, deleteListItem, inputSubmit, inputChange} = this.props;
  const {list, textFromTextarea} = this.props;
console.log('list', list.length)
    return (
       
      <div className='wrapper'>
        <h1>todos</h1>

        <AddTodo 
          inputSubmit={ inputSubmit }
          inputChange={inputChange} 
          textFromTextarea={ textFromTextarea}
        />       

        {list.length ? (
          <ToDoList
            listItemClick={listItemClick}
            deleteListItem={deleteListItem}
            list={list}
          />
        ) : (
          <p> NO todos! </p>
        )}
      </div>
     
    )
  }
} 
  

const mapStateToProps = (state) => {
  console.log('state ', state);
  
  return {
      list: state.todo.list, 
      textFromTextarea: state.todo.textFromTextarea,

  };
};

export default connect(mapStateToProps, {
  listItemClick,
  deleteListItem,
  inputSubmit,
  inputChange
})(App);
