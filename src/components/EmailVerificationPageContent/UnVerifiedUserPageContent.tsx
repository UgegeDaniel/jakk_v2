import React from 'react';
import { Card } from 'react-bootstrap';
import Btn from '../Btn/Btn';
import { useSelector } from 'react-redux';
import { User } from '../../types/stateTypes';

const UnVerifiedUserPageContent: React.FC = () => {
  const { user } = useSelector((state) => state) as User;
  return (
    <Card>
      <Card.Body>
        <Card.Title>Please Verify Your Email</Card.Title>
        <Card.Text>
          An email has been sent to
          <span className="text-primary ml-2">
            {user.user.email}
          </span>
          <Btn txt="Send Mail Again" size="d-block mx-auto my-2" />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UnVerifiedUserPageContent;
