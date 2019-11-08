import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, PUT_START, PUT_SUCCESS, PUT_FAILURE} from '../actions';

// //This is the final initialState to use for final app
const initialState = {
  smurfData: [],
  error: false,
  error_msg: "",
  isFetching: false,
  put_error: false,
  put_error_msg: "",
  isPutting: false,
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
//   put_error: false,
//   put_error_msg: "",
//   isPutting: false,
// };

// //This is a test initialState.  Check wait for transfer from server data display
// const initialState = {
//   smurfData: [],
//   error: false,
//   error_msg: "",
//   isFetching: true,
//   put_error: false,
//   put_error_msg: "",
//   isPutting: false,
// };

//This is a test initialState.  Check get server data error message display
// const initialState = {
//   smurfData: [],
//   error: true,
//   error_msg: "There is an error getting data from server",
//   isFetching: false,
//   put_error: false,
//   put_error_msg: "",
//   isPutting: false,
// };

//This is a test initialState.  Check putting server data error message display
// const initialState = {
//   smurfData: [],
//   error: false,
//   error_msg: "",
//   isFetching: false,
//   put_error: true,
//   put_error_msg: "There is an error getting data from server",
//   isPutting: false,
// };




function reducer(state=initialState,action) {
  switch(action.type) {

    case FETCH_START: {
      const newState = {
        ...state,
        error: false,
        error_msg: "",
        isFetching: true,
        put_error: false,
        put_error_msg: "",
        isPutting: false,
      } 
      return newState;
    }

    case FETCH_SUCCESS: {
      const newState = {
        smurfData: action.payload,
        error: false,
        error_msg: "",
        isFetching: false,
        put_error: false,
        put_error_msg: "",
        isPutting: false,
      } 
      return newState;
    }

    case FETCH_FAILURE: {
      const newState = {
        smurfData: [],
        error: true,
        error_msg: action.payload,
        isFetching: false,
        put_error: false,
        put_error_msg: "",
        isPutting: false,
      } 
      return newState;
    }

    case PUT_START: {
      const newState = {
        ...state,
        error: false,
        error_msg: "",
        isFetching: false,
        put_error: false,
        put_error_msg: "",
        isPutting: true,
      } 
      return newState;
    }

    case PUT_SUCCESS: {
      const newState = {
        smurfData: action.payload,
        error: false,
        error_msg: "",
        isFetching: false,
        put_error: false,
        put_error_msg: "",
        isPutting: false,
      } 
      return newState;
    }

    case PUT_FAILURE: {
      const newState = {
        ...state,
        error: false,
        error_msg: "",
        isFetching: false,
        put_error: true,
        put_error_msg: action.payload,
        isPutting: false,
      } 
      return newState;
    }

    default:
      return state;
  }
}

export default reducer;