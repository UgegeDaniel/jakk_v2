import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOption } from '../../redux-toolkit/features/questionSlice';
import { optionLetters, optionStyle } from './testPageUtils';
import styles from '../../styles';
import useQuestions from './useQuestion';
import StateType from '../../types/stateTypes';
import { OptionProps } from '../../types/propTypes';

const Option: React.FC<OptionProps> = ({ index, option }) => {
  const { id, answer, userChoice } = useQuestions();
  const dispatch = useDispatch();
  const { testSubmitted } = useSelector((state: StateType) => state);
  const chosen = optionLetters[index].toLowerCase() === userChoice;
  const chosenStyle = optionStyle(testSubmitted, answer, optionLetters, index, chosen);

  return (
    <div
      className={`${styles.defaultOptionStyle} ${chosenStyle} p-1`}
      onClick={() => {
        if (testSubmitted) return;
        dispatch(selectOption({ id, option: optionLetters[index].toLowerCase() }));
      }}
    >
      <span className={`mx-1 pb-1 ${chosenStyle}`}>{optionLetters[index]}</span>
      <span className={`mx-1 pb-1 ${chosenStyle}`}>{option}</span>
    </div>
  );
};

export default Option;
