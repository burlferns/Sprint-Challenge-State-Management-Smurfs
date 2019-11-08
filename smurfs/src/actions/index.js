import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const PUT_START = "PUT_START";
export const PUT_SUCCESS = "PUT_SUCCESS";
export const PUT_FAILURE = "PUT_FAILURE";

function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

const delay_time = 1500;  //This is length of artificail delay time so that we can see different states

export function getData() {
    
  return function(dispatch) {
    
    dispatch({type:FETCH_START});
    
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        // console.log("This is data from server:",res.data);
        pausecomp(delay_time); //This is artificail delay time so that we can see different states
        dispatch({type:FETCH_SUCCESS,payload:res.data});
      })
      .catch(err => {
        // console.log(err.response);
        const status = err.response.status; 
        const statusText = err.response.statusText;
        pausecomp(delay_time); //This is artificail delay time so that we can see different states
        dispatch({
          type:FETCH_FAILURE, 
          payload:`Get Server error. Error code:${status}. Error msg:${statusText}`
        });
      });

  };
}


export function putData(data) {
  // console.log("in putData in actions file and data is:",data);  
  return function(dispatch) {
    
    dispatch({type:PUT_START});

    axios
      .post("http://localhost:3333/smurfs", data)
      .then(response => {
        // console.log("In the axios post and response is",response.data);
        pausecomp(delay_time); //This is artificail delay time so that we can see different states
        dispatch({type:PUT_SUCCESS,payload:response.data});
      })
      .catch(err => {   
        // console.log(err.response);
        const status = err.response.status; 
        const statusText = err.response.statusText;
        pausecomp(delay_time); //This is artificail delay time so that we can see different states
        dispatch({
          type:PUT_FAILURE, 
          payload:`Post Server error. Error code:${status}. Error msg:${statusText}`
        });
      });



    
  }
}