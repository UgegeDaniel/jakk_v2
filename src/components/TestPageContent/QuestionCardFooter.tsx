import React from 'react';
import { Button } from 'react-bootstrap';
import { nextQuestion, prevQuestion, jumpToIndex } from '../../redux-toolkit/features/questionSlice';
import { useDispatch, useSelector } from 'react-redux';
import QuestionCardButton from './QuestionCardButton';
import styles from '../../styles';
import useQuestions from './useQuestion';
import StateType from '../../types/stateTypes';

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
      <QuestionCardButton state={state} testSubmitted={testSubmitted} dispatch={dispatch} />
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
