import React, { Component } from "react";
import {connect} from 'react-redux';
import "./App.css";

import SmurfList from './SmurfList';
import SubmitBtn from './SubmitBtn';

import {getData} from '../actions';

class App extends Component {

  clickHandler = e => {
    // console.log("The button is clicked");
    e.preventDefault();
    this.props.getData();
  };



  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {/* <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}

        <SubmitBtn textDisplay={"Get Smurf Data from Server"} clickHandler={this.clickHandler}/>

        <SmurfList/>

      </div>
    );
  }
}

export default connect(null,{getData})(App);
