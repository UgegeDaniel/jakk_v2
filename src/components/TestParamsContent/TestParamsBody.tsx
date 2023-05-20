import { useDispatch, useSelector } from 'react-redux';
import { ModalComponent, Btn } from '../index';
import { getAllSubjects } from '../../redux-toolkit/asyncMethods';
import SubjectsSelection from './SubjectSelection';
import React from 'react';
import StateType from '../../types/stateTypes';
import { urls } from '../../utils/urls';
import { AnyAction } from '@reduxjs/toolkit';

const TestParamsBody = () => {
  const { allSubjects } = useSelector((state: StateType) => state);
  const dispatch = useDispatch();
  const fetchSubjects = () => {
    dispatch(getAllSubjects(urls.getAllSubjects) as unknown as AnyAction);
  };

  if (!allSubjects)
    return (
      <div className="text-danger lead font-weight-bold">
                Couldn&apos;t fetch Subjects
        <Btn onClick={fetchSubjects} txt="Try Again" size="mx-2 btn-sm" />
      </div>
    );

  return (
    <ModalComponent
      openModalTxt="Pick a Subject and Year"
      modalHeaderTxt="Pick a Subject and Year"
      btnVariant="outline-primary"
      onBtnClick={fetchSubjects}
    >
      {(allSubjects?.length > 0) && <SubjectsSelection />}
    </ModalComponent>
  );
};

export default TestParamsBody;
