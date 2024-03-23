// actions.js
import * as types from './constants'; // Import action type constants

export const bookCar = (data) => ({
    type: types.BOOK_CAR,
    payload: data,
});

