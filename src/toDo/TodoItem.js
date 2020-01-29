import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../Context'

function TodoItem({ todo, index, onChange }) {
    const { removeTodo} = useContext(Context)
    const classes =[]

    if (todo.completed) {
        classes.push('done')
    }
    // bind чтобы ф-ия сразу не вызывалась
    // join - чтобы превратить массив в строку и разделить пробелом

    return (
        <li className='list_items'>
            <span className={classes.join(' ')}>
                <input 
                type='checkbox'
                checked={todo.completed}
                onChange={() => onChange(todo.id)}
                
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
                
            </span>
            <button className='btn_deleted' onClick={removeTodo.bind(null,todo.id)}> 
                &times;
            </button> 
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired

}

export default  TodoItem;