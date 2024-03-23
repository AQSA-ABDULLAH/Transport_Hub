import * as type from './constants';

const initialState = {
  carData: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case type.SELECT_BOOKING_CAR:
      return {
        ...state,
        carData: action.payload,
      };

    default:
      return state;
  }
}