import { combineReducers } from 'redux';
import signInReducer from './containers/auth/reducers';
import bookCarReducer from './containers/cars/reducers';

const rootReducer = combineReducers({
    signIn: signInReducer,
    bookCar: bookCarReducer,
});

export default rootReducer;
