import React, { useEffect } from 'react';
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import {connect} from 'react-redux';

import userIcon from '../images/user.png';

import TextIn from './TextIn';
import SubmitBtn from './SubmitBtn';

import {putData} from '../actions';

const FormCtrDiv = styled.div`
  margin-top:50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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


const SmurfForm = (props) => {
  const {status,touched,errors,put_error,put_error_msg,isPutting,putData} = props;
  // const [data, setData] = useState({});
  

  useEffect(() => {
    if(status) {

      const dataObj = {};
      dataObj.name = status.smrfName;
      dataObj.age = status.smrfAge;
      dataObj.height = ""+status.smrfHeight+"cm";

      putData(dataObj);

      // setData({ 
      //   smrfName: status.smrfName,
      //   smrfAge: status.smrfAge,
      //   smrfHeight: status.smrfHeight,
      // });
    }

  }, [status]);

 

  return (
    <>

      {put_error && 
      <StylDiv>
        <StylH2>{put_error_msg}</StylH2>
      </StylDiv>
      }

      {!put_error && isPutting &&
      <StylDiv>
        <StylH2>Transferring data to smurf server, please wait...</StylH2>
      </StylDiv>  
      }



      <FormCtrDiv>
        <Form>

          <TextIn 
            fieldName="smrfName" fieldType="text" fieldPlaceHolder="Smurf name" 
            iconImg={userIcon} imgTxt="Person Icon"
            touched={touched.smrfName} errors={errors.smrfName}
          />

          <TextIn 
            fieldName="smrfAge" fieldType="text" fieldPlaceHolder="Smurf age in years" 
            iconImg={userIcon} imgTxt="Person Icon"
            touched={touched.smrfAge} errors={errors.smrfAge}
          />

          <TextIn 
            fieldName="smrfHeight" fieldType="text" fieldPlaceHolder="Smurf height in cm" 
            iconImg={userIcon} imgTxt="Person Icon"
            touched={touched.smrfHeight} errors={errors.smrfHeight}
          />

          <SubmitBtn textDisplay={"Upload new smurf info to server"}/>
          
        </Form>
        
      </FormCtrDiv>


      {/* The following code is for testing purposes only */}
      {/* comment out in customer version of the code */}
      {/* <p>{`The donor ID is: ${data.smrfName}`}</p>
      <p>{`The donor name is: ${data.smrfAge}`}</p>
      <p>{`The email address is: ${data.smrfHeight}`}</p> */}


    </>

  );
    
 
 } //End of SmurfForm function
 
 
 
const FormikSmurfForm = withFormik({
  
  mapPropsToValues({ smrfName, smrfAge, smrfHeight }) {
    return {
      smrfName: smrfName || "",
      smrfAge: smrfAge || "",
      smrfHeight: smrfHeight || "",
    };
  },

  validationSchema: Yup.object().shape({
    smrfHeight: Yup.number().required("Please input height").typeError("Height must only be digits not other chars").integer("Height must be an integer number").positive("Height must be a positive number"),
    smrfAge: Yup.number().required("Please input age").typeError("Height must only be digits not other chars").integer("Height must be an integer number").positive("Height must be a positive number"),
    smrfName: Yup.string().required("Please input a smurf name"),
  }),
  
  handleSubmit(values, { setStatus, resetForm }) {

    resetForm();
    setStatus(values);

    //I don't need the if statements here, as it seems Formik will not execute handleSubmit until
    //touched is true and there are no errors
    
  },
  
  
})(SmurfForm); 

function mapStateToProps(state) {
  return {
    put_error: state.put_error,
    put_error_msg: state.put_error_msg,
    isPutting: state.isPutting,
  };
}

export default connect(mapStateToProps,{putData})(FormikSmurfForm);



