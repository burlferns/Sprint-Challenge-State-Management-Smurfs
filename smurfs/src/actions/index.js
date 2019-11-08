import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export function getData() {
    
  return function(dispatch) {
    
    dispatch({type:FETCH_START});
    
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        // console.log("This is data from server:",res.data);
        dispatch({type:FETCH_SUCCESS,payload:res.data});
      })
      .catch(err => {
        // console.log(err.response);
        const status = err.response.status; 
        const statusText = err.response.statusText;
        dispatch({
          type:FETCH_FAILURE, 
          payload:`Server error. Error code:${status}. Error msg:${statusText}`
        });
      })

  };
}