import React, {Component} from 'react'
import TodoItem from './TodoItem'


//import PropTypes from 'prop-types'

class ToDoList extends Component {
    render() {
        const {listItemClick,deleteListItem,list} = this.props
        return(
            <ul className='list'>
               { list.map( (todo, index) => {
                   return (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        index={index} 
                        listItemClick={listItemClick}
                        deleteListItem={deleteListItem}                     
                    />
                   )
               })}
            </ul>
        )
    }
   
}

// ToDoList.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.object).isRequired,
//     onToggle: PropTypes.func.isRequired
// }


export default ToDoList