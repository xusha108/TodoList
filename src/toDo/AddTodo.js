import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault() //чтобы страница не перегружалась

        if (value.trim()) //удаляем все пробелы
        {
            onCreate(value)
            setValue('') //удаляем текст после ввода в инпут
        }
    }

    return (
        <form style={{marginLeft: '1rem'}} onSubmit={submitHandler}>
            <input value={value} onChange={ event => setValue(event.target.value)}/>
            <button className='btn_deleted' type='submit'> Add todo </button>
        </form>
    )
}


AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddTodo