import React from "react";
import {connect} from 'react-redux';
import styled from "styled-components";

import SmurfCard from './SmurfCard';


const StylDiv = styled.div`
  max-width:800px;
  margin:30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const StylH2 = styled.h2`
  text-align:center;
  margin: 10px auto;
`;


function SmurfList(props) {
  const {smurfData, error, error_msg, isFetching} = props;

  if(error) {
    return ( 
      <StylDiv>
        <StylH2>{error_msg}</StylH2>
      </StylDiv>  
    );
  }

  if(!error && isFetching) {
    return ( 
      <StylDiv>
        <StylH2>Getting data from smurf server, please wait...</StylH2>
      </StylDiv>  
    );
  }

  if(!error && !isFetching) {
    return ( 
      <StylDiv>
        {smurfData.map((item,index) => 
          <SmurfCard
            item={item}
            key={index}
          />
        )}


        



      </StylDiv>  
    );
  }





}


function mapStateToProps(state) {
  return {
    smurfData: state.smurfData,
    error: state.error,
    error_msg: state.error_msg,
    isFetching: state.isFetching,
  };
}

export default connect(mapStateToProps,{})(SmurfList);