import React from "react";
import {connect} from 'react-redux';
import styled from "styled-components";

const StylDiv = styled.div`
  max-width:800px;
  margin:30px auto;
`;




function SmurfList(props) {
  const {smurfData, error, isFetching} = props;

  if(error) {
    return ( 
      <StylDiv>
        <StylH2>Put appropriate error message here</StylH2>
      </StylDiv>  
    );
  }



}


function mapStateToProps(state) {
  return {
    smurfData: state.smurfData,
    error: state.error,
    isFetching: state.isFetching,
  };
}

export default connect(mapStateToProps,{})(SmurfList);