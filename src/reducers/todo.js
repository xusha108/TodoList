import { LIST_ITEM_CLICK, DELETE_LIST_ITEM, INPUT_SUBMIT, INPUT_CHANGED  } from '../constans'

const initialState = {
    list: [{id: Date.now(), title: 'test', completed: false}],
    textFromTextarea: ''
  };
  
  export default function reducer(state = initialState, {type, index, value}){
      
    console.log('action', {type:type, index:index, value:value})
    switch (type){
    case INPUT_SUBMIT:
      return Object.assign(
        {},
        state,
        {
          list: [...state.list, { id: Date.now(), title: state.textFromTextarea, completed: false }],
          textFromTextarea: ''
        }
      );
    case INPUT_CHANGED:
      return Object.assign(
        {},
        state,
        {textFromTextarea: value}
      );
    case LIST_ITEM_CLICK:
      return Object.assign(
        {},
        state,
        {
          list: [
            ...state.list.slice(0, index),
            Object.assign({}, state.list[index], {completed: !state.list[index].completed}),
            ...state.list.slice(index+1)
          ]
        }
      );
    case DELETE_LIST_ITEM:
      return Object.assign(
        {},
        state,
        {
          list: [
            ...state.list.slice(0, index),
            ...state.list.slice(index+1)
          ]
        }
      );
    default:
      return state;
    }
  }