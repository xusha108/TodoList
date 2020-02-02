import { createStore, compose} from 'redux'
import rootReducer from './reducers/index'
//import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
// import thunk from 'redux-thunk';


// /* подключает devtools*/
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

/*создаем store и пробрасываем туда ...*/
const configureStore = preloadedState => (
    createStore(
        rootReducer, // корневой редьюсер
        preloadedState, //начальное состояние
        composeEnhancers(),
    )
); 

 const store = configureStore({});

 export default store;

// const enhancer = composeWithDevTools(applyMiddleware(thunk));

// export default function configureStore() {
//   const rootReducer = combineReducers({
//     text
//   });
//   const store = createStore(rootReducer, {}, enhancer);

//   return store;
// }

