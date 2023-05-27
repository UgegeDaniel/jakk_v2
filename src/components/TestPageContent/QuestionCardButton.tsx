import React from 'react';
import ModalComponent from '../Modal/Modal';
import { saveUserScore } from '../../redux-toolkit/asyncMethods';
import ResultCard from '../Result/ResultCard';
import { urls } from '../../utils/urls';
import { showModal } from '../../redux-toolkit/features/questionSlice';
import { AnyAction } from '@reduxjs/toolkit';
import { SubmitTestBtnProps } from '../../types/propTypes';

const QuestionCardButton: React.FC<SubmitTestBtnProps> = ({
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

export default QuestionCardButton;