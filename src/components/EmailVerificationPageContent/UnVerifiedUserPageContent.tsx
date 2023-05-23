import React from 'react';
import { Card } from 'react-bootstrap';
import Btn from '../Btn/Btn';
import { useSelector, useDispatch } from 'react-redux';
import { User } from '../../types/stateTypes';
import { urls } from '../../utils/urls';
import { AnyAction } from '@reduxjs/toolkit';
import { resendEmail } from '../../redux-toolkit/asyncMethods';
import { useNavigate } from 'react-router-dom';

const UnVerifiedUserPageContent: React.FC = () => {
  const { user } = useSelector((state) => state) as User;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleResendEmail = () => dispatch(resendEmail(urls.resendEmail(
    user.user.email, user.user.name, navigate
  )) as unknown as AnyAction);
  return (
    <Card>
      <Card.Body>
        <Card.Title>Please Verify Your Email</Card.Title>
        <Card.Text>
          An email has been sent to
          <span className="text-primary ml-2">
            {user.user.email}
          </span>
          <Btn onClick={handleResendEmail} txt="Send Mail Again" size="d-block mx-auto my-2" />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UnVerifiedUserPageContent;
