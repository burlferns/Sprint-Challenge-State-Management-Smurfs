import React from "react";
import styled from "styled-components";

const StylDiv = styled.div`
  width:200px;
  background-color: orange;
  border: 1px solid orange;
  margin:20px 0;
  // text-align:left;
`;

export default function SmurfCard(props) {
  const {name,age,height} = props.item;

  return (
    <StylDiv>
      <h3>{`Name: ${name}`}</h3>
      <p>{`Age: ${age}`}</p>
      <p>{`Height: ${height}`}</p>
    </StylDiv>
  );
} 