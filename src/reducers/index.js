  
import { combineReducers } from 'redux';
import todo from './todo'


const rootReducer = combineReducers({
    todo,

    
}); //все редьюсеры, возвращает обьект

export default rootReducer;