import { combineReducers } from 'redux';
import signInReducer from './containers/auth/reducers';
import bookCar from './containers/cars/reducers';

const rootReducer = combineReducers({
    signIn: signInReducer,
    bookCar: bookCar,
});

export default rootReducer;
