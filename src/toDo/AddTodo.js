import React, {Component} from 'react'
//import PropTypes from 'prop-types'


class AddTodo extends Component {
    render() {
       const {inputSubmit, inputChange, textFromTextarea} = this.props
        
       const saveTodo = () =>  {
              
           if (textFromTextarea.trim()) 
           {
               inputSubmit()
               inputChange('') 
           }
       }
   
       return (
           <form style={{marginLeft: '1rem'}}>
               <input value={textFromTextarea} onChange={ event => inputChange(event.target.value)}/>
               <button className='btn_deleted' type='button' onClick={saveTodo}> Add todo </button>
           </form>
       )
    }
}



export default AddTodo