import rootReducer from './reducers/index'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

const enhancer = composeWithDevTools(applyMiddleware(thunk));
/*создаем store и пробрасываем туда ...*/
const configureStore = preloadedState => (
    createStore(
        rootReducer, // корневой редьюсер
        preloadedState, //начальное состояние
        enhancer,
    )
); 

 const store = configureStore({});

 export default store;


