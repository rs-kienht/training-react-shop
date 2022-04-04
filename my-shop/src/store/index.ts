import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import manageShop from './../reducers/index'
const store = createStore(manageShop, applyMiddleware(thunkMiddleware));
export default store;