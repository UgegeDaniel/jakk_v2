import React from "react";
import { Card } from "react-bootstrap";
import TestParamsBody from "./TestParamsBody";
import Btn from "../Btn/Btn";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../redux-toolkit/asyncMethods";
import { useNavigate } from 'react-router-dom';
import StateType from "../../types/stateTypes";
import { urls } from "../../utils/urls";
import { AnyAction } from "@reduxjs/toolkit";

function TestParamsContent() {
  const { testParams } = useSelector((state: StateType) => state);
  const { chosenYear, chosenSubject } = testParams;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const startTest = () => {
    dispatch(getQuestions(urls.getQuestions(testParams, navigate))as unknown as AnyAction);
  };

  return (
    <React.Fragment>
      <Card.Title>
        You have chosen to take an objective test in
        <span className={`text-primary mx-1 ${!chosenSubject && 'text-danger'}`}>
          {chosenSubject || "---"}
        </span> of year
        <span className={`text-primary mx-1 ${!chosenYear && 'text-danger'}`}>
          {chosenYear || "---"}
        </span>
        <span className='text-primary mr-1'> UTME </span> Examinations
      </Card.Title>
      <TestParamsBody />
      <Btn
        variant="primary"
        size="lg d-block my-2"
        onClick={startTest}
        txt='Proceed to Test'
        disabled={!chosenSubject && !chosenYear}
      />
    </React.Fragment>
  );
}

export default TestParamsContent;
