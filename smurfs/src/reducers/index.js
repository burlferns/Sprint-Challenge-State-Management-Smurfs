import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from '../actions';

//This is the final initialState to use for final app
// const initialState = {
//   smurfData: [],
//   error: false,
//   isFetching: false,
// };

//This is a test initialState.  Check smurf card display
const initialState = {
  smurfData: [{"name":"Brainey","age":200,"height":"5cm","id":0}],
  error: false,
  isFetching: false,
};

function reducer(state=initialState,action) {
  switch(action.type) {
    
    default:
      return state;
  }
}

export default reducer;