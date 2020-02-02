import React, {Component} from 'react'
//import PropTypes from 'prop-types'


class AddTodo extends Component {
    render() {
       const {inputSubmit, inputChange, textFromTextarea} = this.props
        
       const submitHandler = (event) =>  {
           event.preventDefault() //чтобы страница не перегружалась
   
           if (textFromTextarea.trim()) //удаляем все пробелы
           {
               inputSubmit()
               inputChange('') 
           }
       }
   
       return (
           <form style={{marginLeft: '1rem'}} onSubmit={submitHandler}>
               <input value={textFromTextarea} onChange={ event => inputChange(event.target.value)}/>
               <button className='btn_deleted' type='submit'> Add todo </button>
           </form>
       )
    }
}



export default AddTodo