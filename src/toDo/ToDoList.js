import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

function ToDoList(props) {
    return(
        <ul className='list'>
           { props.todos.map( (todo, index) => {
               return (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    index={index} 
                    onChange={props.onToggle}
                />
               )
           })}
        </ul>
    )
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}


export default ToDoList