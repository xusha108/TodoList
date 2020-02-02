import { LIST_ITEM_CLICK, DELETE_LIST_ITEM, INPUT_SUBMIT, INPUT_CHANGED  } from '../constans'

export const listItemClick = (index) =>{
  return {
    type: LIST_ITEM_CLICK,
    index 
  }
}

export const deleteListItem = (index) => {
  return {
    type: DELETE_LIST_ITEM,
    index
  }
}

export const inputSubmit = () => {
  return {
    type: INPUT_SUBMIT
  };
}

export const inputChange = (value) => {
  return {
    type: INPUT_CHANGED,
    value
  }
}

