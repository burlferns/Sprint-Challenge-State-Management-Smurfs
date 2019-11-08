import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from '../actions';

// //This is the final initialState to use for final app
const initialState = {
  smurfData: [],
  error: false,
  error_msg: "",
  isFetching: false,
};

// //This is a test initialState.  Check smurf card display
// const initialState = {
//   smurfData: [
//     {"name":"Brainey","age":200,"height":"5cm","id":0},
//     {"name":"Joey","age":25,"height":"155cm","id":1},
//     {"name":"Phoebe","age":22,"height":"145cm","id":2}
//   ],
//   error: false,
//   error_msg: "",
//   isFetching: false,
// };

// //This is a test initialState.  Check wait for data display
// const initialState = {
//   smurfData: [],
//   error: false,
//   error_msg: "",
//   isFetching: true,
// };

//This is a test initialState.  Check error message display
// const initialState = {
//   smurfData: [],
//   error: true,
//   error_msg: "There is an error",
//   isFetching: false,
// };





function reducer(state=initialState,action) {
  switch(action.type) {

    case FETCH_START: {
      const newState = {
        ...state,
        error: false,
        error_msg: "",
        isFetching: true,
      } 
      return newState;
    }

    case FETCH_SUCCESS: {
      const newState = {
        smurfData: action.payload,
        error: false,
        error_msg: "",
        isFetching: false,
      } 
      return newState;
    }

    case FETCH_FAILURE: {
      const newState = {
        smurfData: [],
        error: true,
        error_msg: action.payload,
        isFetching: false,
      } 
      return newState;
    }

    default:
      return state;
  }
}

export default reducer;