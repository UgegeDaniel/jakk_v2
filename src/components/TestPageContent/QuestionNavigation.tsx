import React, { Dispatch } from 'react';
import { Button } from 'react-bootstrap';
import ModalComponent from '../ModalComponent/ModalComponent';
import { nextQuestion, prevQuestion, jumpToIndex, showModal } from '../../redux-toolkit/features/questionSlice';
import { saveUserScore } from '../../redux-toolkit/asyncMethods';
import { useDispatch, useSelector } from 'react-redux';
import ResultCard from './ResultCard';
import styles from '../../styles';
import useQuestions from './useQuestion';
import StateType from '../../types/stateTypes';
import { urls } from '../../utils/urls';
import { AnyAction } from '@reduxjs/toolkit';

const SubmitTestBtn: React.FC<{ testSubmitted: boolean; dispatch: Dispatch<AnyAction>; state: StateType }> = ({
  testSubmitted,
  dispatch,
  state,
}) => (
  <ModalComponent
    openModalTxt={testSubmitted ? 'See Result' : 'Finish and Submit'}
    modalHeaderTxt="Test Submitted"
    btnVariant="primary"
    onBtnClick={() => {
      if (!testSubmitted) {
        dispatch(saveUserScore(urls.saveScore(state)) as unknown as AnyAction);
      }
      if (testSubmitted) {
        dispatch(showModal(true));
      }
    }}
  >
    <ResultCard />
  </ModalComponent>
);

const QuestionNavigation: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: StateType) => state);
  const { testSubmitted } = useSelector((state: StateType) => state);
  const { length, answered } = useQuestions();

  return (
    <div className={styles.flexCenter}>
      <Button variant="outline-primary" className="mx-2" onClick={() => dispatch(prevQuestion())}>
        Prev
      </Button>
      <Button variant="outline-primary" className="mx-2" onClick={() => dispatch(nextQuestion())}>
        Next
      </Button>
      <SubmitTestBtn state={state} testSubmitted={testSubmitted} dispatch={dispatch} />
      <div>
        {[...Array(length).keys()].map((item) => (
          <Button
            key={item}
            className="m-1 rounded-circle"
            variant={answered(item) ? 'primary' : 'outline-primary'}
            onClick={() => dispatch(jumpToIndex(item))}
          >
            {item + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionNavigation;
