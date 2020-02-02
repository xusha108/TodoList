import React, {Component} from 'react'
//import PropTypes from 'prop-types'


class TodoItem extends Component {
    render() {
        const { todo, index, listItemClick, deleteListItem } = this.props
        const classes =[]
    
        if (todo.completed) {
            classes.push('done')
        }
           
        return (
            <li className='list_items'>
                <span className={classes.join(' ')}>
                    <input 
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => listItemClick(index)}
                    
                    />
                    <strong>{index + 1}</strong>
                    &nbsp;
                    {todo.title}
                    
                </span>
                <button className='btn_deleted' onClick={() => deleteListItem(index)}> 
                    &times;
                </button> 
            </li>
        )
    }
    
}

// TodoItem.propTypes = {
//     todo: PropTypes.object.isRequired,
//     index: PropTypes.number,
//     onChange: PropTypes.func.isRequired

// }

export default  TodoItem;