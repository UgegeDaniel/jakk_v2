import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Modal, Button } from '../index';
import { getAllSubjects } from '../../redux-toolkit/asyncMethods';
import SubjectsSelection from './SubjectSelection';
import StateType from '../../types/stateTypes';
import { urls } from '../../utils/urls';
import { AnyAction } from '@reduxjs/toolkit';
import { ParamsModalProps } from '../../types/propTypes';

const ParamsModal: React.FC<ParamsModalProps> = ({ startTest }) => {
  const { allSubjects } = useSelector((state: StateType) => state);
  const dispatch = useDispatch();
  const fetchSubjects = () => {
    dispatch(getAllSubjects(urls.getAllSubjects) as unknown as AnyAction);
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  const NoSubjects = () => <div className="text-danger lead font-weight-bold">
    Couldn&apos;t fetch Subjects
    <Button onClick={fetchSubjects} txt="Try Again" style="mx-2 btn-sm d-block" />
  </div>;

  return (
    <Modal
      openModalTxt="Pick a Subject and Year"
      modalHeaderTxt="Pick a Subject and Year"
      btnVariant="outline-primary"
    >
      <Container style={{ overflow: 'auto', height: '60vh' }}>
        {(allSubjects?.length > 0) ? <SubjectsSelection startTest={startTest} /> : <NoSubjects />}
      </Container>
    </Modal>
  );
};

export default ParamsModal;
