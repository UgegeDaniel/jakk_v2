import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import StateType from '../../types/stateTypes';
import { AnyAction } from '@reduxjs/toolkit';
import { urls } from '../../utils/urls';
import { verifyEmail } from '../../redux-toolkit/asyncMethods';
import Loader from '../Loaders/Loader';

const EmailVerifationProgress: React.FC = () => {
  const searchParams = new URLSearchParams(location.search);
  const ref = searchParams.get('ref');

  const { loading } = useSelector((state: StateType) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(verifyEmail(urls.verifyEmail(ref, navigate)) as unknown as AnyAction);
  }, [dispatch]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Email Verification In Progress ...</Card.Title>
        <Card.Text>
          Please wait while we verify your Email
          {loading.user && <Loader />}
        </Card.Text>
      </Card.Body>
    </Card>
  );

};

export default EmailVerifationProgress;
